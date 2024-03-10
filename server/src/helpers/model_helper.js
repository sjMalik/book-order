/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
// The helper functions of a model that uses Knexjs to store and retrieve data from a
// database using the provided `knex` instance. Custom functionality can be
// composed on top of this set of common functions.
//
// The idea is that these are the most-used types of functions that most/all
// "models" will want to have. They can be overriden/modified/extended if
// needed by composing a new object out of the one returned by this function ;)

const debug = require('debug')('order:modelHelper');

module.exports = ({
    knex = {},
    name = 'name',
    tableName = 'tableName',
    selectableProps = [],
    timeout = 1000,
}) => {
    const create = (props) => {
        debug(props);
        delete props.id; // Not allowed to set id

        return knex.insert(props)
            .returning(selectableProps)
            .into(tableName)
            .timeout(timeout);
    };

    const update = (id, props) => knex(tableName)
        .update(props)
        .where({ id })
        .timeout(timeout);

    const find = (filters) => knex.select(selectableProps)
        .from(tableName)
        .where(filters)
        .timeout(timeout);

    const findOne = (filters) => find(filters)
        .then((results) => {
            if (!Array.isArray(results)) return results;

            return results[0];
        });

    const getAllItemsFiltered = async (filters = {}, page = 1, limit = 10) => {
        try {
            const query = knex.select(selectableProps).from(tableName);

            // Apply filters
            Object.keys(filters).forEach((key) => {
                const value = filters[key];
                if (value !== undefined) {
                    // Handle different operators with filter
                    if (typeof value === 'object' && value !== null) {
                        const { like, min, max } = value;
                        if (like !== undefined) {
                            query.where(key, 'like', `%${like}%`);
                        }
                        if (min !== undefined) {
                            query.where(key, '<=', Number(min));
                        }
                        if (max !== undefined) {
                            query.where(key, '>=', Number(max));
                        }
                    } else {
                        query.where(key, value);
                    }
                }
            });

            // Count total items
            const totalCountQuery = knex(tableName).count('* as total');
            const [{ total }] = await totalCountQuery;

            // Paginated query
            query.offset((page - 1) * limit).limit(limit);

            // Execute the query
            const items = await query;
            return { total, items };
        } catch (e) {
            debug(e);
            throw new Error('Error fething the items');
        }
    };

    return {
        create,
        update,
        find,
        findOne,
        getAllItemsFiltered,
    };
};
