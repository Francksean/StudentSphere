const express = require('express');
const productsController = require('../controllers/products-controller')

const router = express.Router();

router.get("/feed", productsController.getAllProducts );

router.get("/search_name/:productName", productsController.getProductsByName)

router.get("/search_id/:id", productsController.getProductsById)

router.post("/feed_by_category", productsController.getProductsByCategory )

module.exports = router;
