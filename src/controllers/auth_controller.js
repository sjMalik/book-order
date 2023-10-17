/* eslint-disable consistent-return */
const debug = require('debug')('order:authController');
const { User } = require('../models');
const {
    createError,
    CONFLICT,
    BAD_REQUEST,
    UNAUTHOROZED,
    NOT_FOUND,
} = require('../helpers/error_helper');

const postRegister = async (req, res, next) => {
    const props = req.body.user;

    try {
        let user = await User.findOne({ email: props.email });
        if (user) {
            return next(createError({
                status: CONFLICT,
                message: 'Username already exist',
            }));
        }
        debug(props);
        user = await User.create(props);
        res.json({
            ok: true,
            message: 'Registration Successful',
            user,
        });
    } catch (e) {
        next(e);
    }
};

const postLogin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(createError({
            status: BAD_REQUEST,
            message: 'email & password are required field',
        }));
    }

    try {
        const user = await User.verify(email.trim(), password);
        if (!user) {
            return next(createError({
                status: NOT_FOUND,
                message: 'User not found',
            }));
        }
        return res.json({
            ok: true,
            message: 'Login successful',
            token: user.token,
        });
    } catch (e) {
        return next(createError({
            status: UNAUTHOROZED,
            message: e,
        }));
    }
};

module.exports = {
    postRegister,
    postLogin,
};
