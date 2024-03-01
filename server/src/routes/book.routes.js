const router = require('express').Router();
const { createBook, getAllBooksFiltered, updateBook } = require('../controllers/book_controller');
const { authenticateJWT, authorizeRole } = require('../middleware/auth_middleware');

router.post('/', authenticateJWT, authorizeRole('ADMIN'), createBook);
router.put('/:id', authenticateJWT, authorizeRole('ADMIN'), updateBook);
router.get('/', authenticateJWT, getAllBooksFiltered);

module.exports = router;
