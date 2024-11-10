const express = require('express');
const { getImage } = require('../controllers/imageController');
const methodNotAllowedMiddleware = require('../middlewares/methodNotAllowedMiddleware');

const router = express.Router();

// Define routes with Express.js syntax
router.get('/get-image/:width?/:height?', getImage, methodNotAllowedMiddleware);
// router.get('/get-image/:width(\\d+)?/:height?', getImage, methodNotAllowedMiddleware); // Uncomment if using numeric validation for width
// router.get('/get-image', getImage, methodNotAllowedMiddleware);

module.exports = router;
