const express = require('express');
const productsController = require('../controllers/products-controller')

const router = express.Router();

router.put('/addLike/:id', productsController.addProductLike)

router.delete('/removeLike/:id', productsController.removeProductLike)

router.get("/search_name/:productName", productsController.getProductsByName)

router.get("/search_id/:id", productsController.getProductsById)

router.post("/feed_by_category", productsController.getProductsByCategory )

router.get("/feed", productsController.getAllProducts );

module.exports = router;
