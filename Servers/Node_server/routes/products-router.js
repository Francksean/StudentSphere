const express = require('express');
const productsController = require('../controllers/products-controller')

const router = express.Router();

// gestion de la requête get sur l'url http://localhost:3000/shop/feed (récupérer tous les produits)
router.get("/feed", productsController.getAllProducts );


// gestion de la requête get sur l'url http://localhost:3000/shop/feed_by_category (récupérer les produits par catégorie)
router.post("/feed_by_category", productsController.getProductsByCategory )

module.exports = router;
