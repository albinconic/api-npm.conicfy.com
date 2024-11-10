const express = require('express');
const { register, logout, login } = require('../controllers/authController');
const methodNotAllowedMiddleware = require('../middlewares/methodNotAllowedMiddleware');

const router = express.Router();

// Define routes with Express.js syntax
router.post('/login', login, methodNotAllowedMiddleware);
router.post('/register', register, methodNotAllowedMiddleware);
router.get('/logout', logout, methodNotAllowedMiddleware);

module.exports = router;
