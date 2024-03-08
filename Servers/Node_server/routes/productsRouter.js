const express = require('express');
const router = express.Router();

// constante qui contient la route (importée et utilisée dans index.js)
const productsRouter = (connection) => {
  // gestion de la requête get sur l'url http://localhost:3000/shop/feed (récupérer tous les produits)
  router.get("/feed", (req, res) => {
    const feed = connection.query('SELECT * FROM products', (error, results) => {
      res.send(results);
    });
  });


  // gestion de la requête get sur l'url http://localhost:3000/shop/feedByCat (récupérer les produits par catégorie)
  router.post("/feed_by_category", (req, res) => {
    const { category } = req.body;
    console.log(category)
    
    // une alternaive serait :
    // const feed = connection.query(`SELECT * FROM products WHERE category = ?`, [category], (error, results) => {
    const feed = connection.query(`SELECT * FROM products WHERE category = '${category}'`, (error, results) => {
      // console.log(results)
      res.send(results);
    })
  })

  return router;
};

module.exports = productsRouter;
