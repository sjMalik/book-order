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

    const all = () => knex.select(selectableProps)
        .from(tableName)
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

    return {
        create,
        all,
        find,
        findOne,
    };
};
