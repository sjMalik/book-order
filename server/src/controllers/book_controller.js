/* eslint-disable camelcase */
const { Books } = require('../models');
// eslint-disable-next-line import/order
const debug = require('debug')('order:bookController');

const getAllBooks = async (req, res) => {
  debug(Books);
  try {
    const books = await Books.listing();
    res.json(books);
  } catch (error) {
    console.error(error);
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
    console.error(error);
    res.status(500).send('Error creating book');
  }
};

module.exports = { getAllBooks, createBook };
