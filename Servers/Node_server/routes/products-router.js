const express = require('express');
const productsController = require('../controllers/products-controller')

const router = express.Router();


// constante qui contient la route (importée et utilisée dans index.js)
const productsRouter = () => {

  console.log('ok ok')

  // gestion de la requête get sur l'url http://localhost:3000/shop/feed (récupérer tous les produits)
  router.get("/feed", productsController.get_all_products );


  // gestion de la requête get sur l'url http://localhost:3000/shop/feed_by_category (récupérer les produits par catégorie)
  router.post("/feed_by_category", productsController.get_product_by_category )


  return router;
};

module.exports = productsRouter;
