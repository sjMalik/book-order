/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
const createModelHelper = require('../helpers/model_helper');
// eslint-disable-next-line import/no-extraneous-dependencies
const bcrypt = require('bcrypt');
const debug = require('debug')('order:userModel');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_TTL, SALT_ROUND } = require('../../config');

const name = 'User';
const tableName = 'users';

// Properties that are allowed to be selected from the database for reading.
// (e.g., `password` is not included and thus cannot be selected)
const selectableProps = [
    'id',
    'email',
    'first_name',
    'last_name',
    'role',
    'created_at',
];

// Bcrypt functions used for hashing password
const hashPassword = (password) => bcrypt.hash(password, Number(SALT_ROUND));
const verifyPassword = (password, hash) => bcrypt.compare(password, hash);

// Always perform this logic before saving to db. This includes always hashing
// the password field prior to writing so it is never saved in plain text.
const beforeSave = (user) => {
    if (!user.password) return Promise.resolve(user);

    // `password` will always be hashed before being saved.
    return hashPassword(user.password)
        .then((hash) => ({ ...user, password: hash }))
        .catch((err) => `Error hashing password ${err}`);
};

module.exports = (knex) => {
    const userHelper = createModelHelper({
        knex,
        name,
        tableName,
        selectableProps,
    });

    const create = (props) => beforeSave(props)
        .then((user) => {
            debug(user);
            return userHelper.create(user);
        });

    const verify = async (email, password) => {
        const matchErrorMsg = 'Password do not match';

        const user = await knex.select()
            .from(tableName)
            .where({ email });

        if (user.length > 0) {
            const isMatch = await verifyPassword(password, user[0].password);
            if (isMatch) {
                delete user[0].password;
                debug(user[0]);
                const token = jwt.sign(user[0], JWT_SECRET, {
                    expiresIn: JWT_TTL,
                });
                debug(token);
                return { ...user[0], token };
            }
        } else {
            return null;
        }
        throw new Error(matchErrorMsg);
    };

    return {
        name,
        ...userHelper,
        create,
        verify,
    };
};
