const router = require('express').Router();
const { postRegister, postLogin, verifyEmail } = require('../controllers/auth_controller');

router.route('/register')
    .post(postRegister);

router.route('/login')
    .post(postLogin);

router.route('/email_verification')
    .post(verifyEmail);

module.exports = router;
