const createModelHelper = require('../helpers/model_helper');

const name = 'Books';
const tableName = 'books';

// Properties that are allowed to be selected from the database for reading.
// (e.g., `password` is not included and thus cannot be selected)
const selectableProps = [
    'id',
    'title',
    'author',
    'price',
    'quantity_available',
];

module.exports = (knex) => {
    const bookHelper = createModelHelper({
        knex,
        name,
        tableName,
        selectableProps,
    });

    const create = (book) => bookHelper.create(book);

    const listing = () => bookHelper.all();

    const getById = (bookid) => bookHelper.findOne({ id: bookid });

    const update = (id, book) => bookHelper.update(id, book);

    const getAllBooksFiltered = (filters, page, limit) => bookHelper.getAllItemsFiltered(filters, page, limit);

    return {
        name,
        ...bookHelper,
        create,
        update,
        listing,
        getAllBooksFiltered,
        getById,
    };
};
