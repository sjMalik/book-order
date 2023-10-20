/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-import-module-exports
const crypto = require('crypto');
const debug = require('debug')('order:authController');
const { User, EmailVerification } = require('../models');
const Email = require('../utils/email');
const {
    createError,
    CONFLICT,
    BAD_REQUEST,
    UNAUTHOROZED,
    NOT_FOUND,
} = require('../helpers/error_helper');

const confirmEmail = async (name, email) => {
    const token = crypto.randomBytes(8).toString('hex');
    debug(token);
    EmailVerification.create({ token, email })
        .then(() => Email.sendConfirmationMail(token, name, email));
};

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
        await confirmEmail(`${props.first_name} ${props.last_name}`, props.email);
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
            email_verified: user.email_verification === 'VERIFIED',
        });
    } catch (e) {
        return next(createError({
            status: UNAUTHOROZED,
            message: e,
        }));
    }
};

const verifyEmail = async (req, res, next) => {
    const { email, token } = req.body;

    try {
        const verified = await EmailVerification.verifyEmail(email, token);
        if (!verified) {
            return next(createError({
                status: NOT_FOUND,
                message: 'User not found',
            }));
        }
        return res.json(verified);
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
    verifyEmail,
};
