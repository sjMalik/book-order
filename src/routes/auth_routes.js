const router = require('express').Router();
const { postRegister, postLogin } = require('../controllers/auth_controller');

router.route('/register')
    .post(postRegister);

router.route('/login')
    .post(postLogin);

module.exports = router;
