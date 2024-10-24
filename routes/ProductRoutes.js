const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');



// Route to get all products
router.get('/CCTV', productController.getProductsCCTV);

router.get('/AC', productController.getProductsAC);
// Route to create a product
// router.post('/add', productController.createProduct);

// Route to get a single product by its ID
// router.get('/products/:id', productController.getProductById);

module.exports = router;
