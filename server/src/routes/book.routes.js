const router = require('express').Router();
const { createBook, getAllBooks } = require('../controllers/book_controller');
const { authenticateJWT, authorizeRole } = require('../middleware/auth_middleware');

router.post('/', authenticateJWT, authorizeRole('ADMIN'), createBook);
router.get('/', authenticateJWT, getAllBooks);

module.exports = router;
