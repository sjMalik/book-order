const router = require('express').Router();
const { createBook, getAllBooksFilterd, updateBook } = require('../controllers/book_controller');
const { authenticateJwt, authorizeRole } = require('../middleware/auth_middleware');

router.post('/', authenticateJwt, authorizeRole('ADMIN'), createBook);
router.get('/', authenticateJwt, getAllBooksFilterd);
router.put('/:id', authenticateJwt, authorizeRole('ADMIN'), updateBook);

module.exports = router;
