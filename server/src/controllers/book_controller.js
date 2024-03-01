/* eslint-disable camelcase */
const { Books } = require('../models');
// eslint-disable-next-line import/order
const debug = require('debug')('order:bookController');

const getAllBooks = async (req, res) => {
  try {
    const books = await Books.listing();
    res.json(books);
  } catch (error) {
    debug(error);
    res.status(500).send('Error fetching books');
  }
};

const createBook = async (req, res) => {
  const {
    title, author, price, quantity_available,
  } = req.body;
  try {
    await Books.create({
      title, author, price, quantity_available,
    });
    res.sendStatus(200);
  } catch (error) {
    debug(error);
    res.status(500).send('Error creating book');
  }
};

const updateBook = async (req, res) => {
  const {
    title, author, price, quantity_available,
  } = req.body;
  try {
    await Books.update(req.params.id, {
      title, author, price, quantity_available,
    });
    res.sendStatus(200);
  } catch (error) {
    debug(error);
    res.status(500).send('Error updating book');
  }
};

const getAllBooksFiltered = async (req, res) => {
  const {
    title, author, minPrice, maxPrice, page, limit,
  } = req.query;
  const filters = {};

  if (title) {
    filters.title = { like: title };
  }

  if (author) {
    filters.author = { like: author };
  }

  if (minPrice) {
    filters.price = { min: minPrice };
  }

  if (maxPrice) {
    filters.price = { max: maxPrice };
  }

  debug(filters);

  try {
    const books = await Books.getAllBooksFiltered(filters, page, limit);
    res.json(books);
  } catch (error) {
    debug(error);
    res.status(500).send('Error fetching books');
  }
};

module.exports = {
  getAllBooks, createBook, updateBook, getAllBooksFiltered,
};
