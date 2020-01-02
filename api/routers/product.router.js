const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');

router.get('/',productController.index);
router.post('/',productController.postProduct);
module.exports = router;