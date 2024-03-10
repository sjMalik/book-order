/* eslint-disable camelcase */
const { Books } = require('../models');
// eslint-disable-next-line import/order
const debug = require('debug')('order:bookController');

const createBook = async (req, res) => {
    const {
        title, author, price, quantity_available,
    } = req.body;

    try {
        await Books.create({
            title, author, price, quantity_available,
        });
        res.sendStatus(200);
    } catch (e) {
        debug(e);
        res.status(500).send('Error creating book');
    }
};

const updateBook = async (req, res) => {
    const {
        title, author, price, quantity_available,
    } = req.body;
    const { id } = req.params;

    try {
        await Books.update(id, {
            title, author, price, quantity_available,
        });
        res.sendStatus(200);
    } catch (e) {
        debug(e);
        res.status(500).send('Error updating book');
    }
};

const getAllBooksFilterd = async (req, res) => {
    const { title, author, minPrice, maxPrice, page, limit } = req.query;
    const filters = {};

    if (title) {
        filters.title = { ...filters, like: title };
    }

    if (author) {
        filters.author = { ...filters, like: author };
    }

    if (minPrice) {
        filters.price = { ...filters, min: minPrice };
    }

    if (maxPrice) {
        filters.price = { ...filters, max: maxPrice };
    }

    console.log(filters)

    try {
        const books = await Books.getAllBooksFilterd(filters, page, limit);
        res.json(books);
    } catch (e) {
        debug(e);
        res.status(500).send('Error fetching books');
    }
};

module.exports = { createBook, updateBook, getAllBooksFilterd };
