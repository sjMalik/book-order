/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const debug = require('debug')('order:errorMiddleware');

const {
    BAD_REQUEST,
    CONFLICT,
    FORBIDDEN,
    GENERAL_ERROR,
    NOT_FOUND,
    UNAUTHOROZED,
    UNPROCESSABLE,
} = require('../helpers/error_helper');

const unauthorized = (err, req, res, next) => {
    if (err.status !== UNAUTHOROZED) return next(err);

    res.status(UNAUTHOROZED).send({
        ok: false,
        message: err.message || 'Unauthorized',
        errors: [err],
    });
};

const forbidden = (err, req, res, next) => {
    if (err.status !== FORBIDDEN) return next(err);

    res.status(FORBIDDEN).send({
        ok: false,
        message: err.message || 'Forbidden',
        errors: [err],
    });
};

const conflict = (err, req, res, next) => {
    if (err.status !== CONFLICT) return next(err);

    res.status(CONFLICT).send({
        ok: false,
        message: err.message || 'Conflict',
        errors: [err],
    });
};

const badRequest = (err, req, res, next) => {
    if (err.status !== BAD_REQUEST) return next(err);

    res.status(BAD_REQUEST).send({
        ok: false,
        message: err.message || 'Bad Request',
        errors: [err],
    });
};

const unprocessable = (err, req, res, next) => {
    if (err.status !== UNPROCESSABLE) return next(err);

    res.status(UNPROCESSABLE).send({
        ok: false,
        message: err.message || 'Unprocessable Entity',
        errors: [err],
    });
};

// If there's nothing left to do after all this (and there's no error),
// return a 404 error.
const notFound = (err, req, res, next) => {
    if (err.status !== NOT_FOUND) return next(err);

    res.status(NOT_FOUND).send({
        ok: false,
        message: err.message || 'The requested resource could not be found',
    });
};

// If there's still an error at this point, return a generic 500 error.
const genericError = (err, req, res, next) => {
    if (err.status !== GENERAL_ERROR) return next(err);

    res.status(GENERAL_ERROR).send({
        ok: false,
        message: err.message || 'Internal Server Error',
        errors: [err],
    });
};

// If there's nothing left to do after all this (and there's no error),
// return a 404 error.
const catchAll = (req, res, next) => {
    res.status(NOT_FOUND).send({
        ok: false,
        message: 'The requested resourse not found',
    });
};

const exportable = {
    unauthorized,
    conflict,
    badRequest,
    notFound,
    genericError,
    forbidden,
    catchAll,
};

// All exportables stored as an array (e.g., for including in Express app.use())
const all = Object.keys(exportable).map((key) => exportable[key]);
debug(all);

module.exports = {
    ...exportable,
    all,
};
