const express = require('express');
const mysql = require('mysql');


const router = express.Router();


// constante qui contient la route (importée et utilisée dans index.js)
const productsRouter = (connection) => {

  // gestion de la requête get sur l'url http://localhost:3000/shop/feed (récupérer tous les produits)
  router.get("/feed", (req, res) => {
    const feed = connection.query('SELECT * FROM products', (error, results) => {
      if(error){
        res.json({ success : false, message : "Problème lors du chargement des produits ",error : error });
      }else{
        res.json({ success : true, results : results });
      }
    });
  });


  // gestion de la requête get sur l'url http://localhost:3000/shop/feed_by_category (récupérer les produits par catégorie)
  router.post("/feed_by_category", (req, res) => {

    const { category } = req.body;
    
    /* 
      une alternaive serait :
      const feed = connection.query(`SELECT * FROM products WHERE category = ?`, [category], (error, results) => {
    */
    const feed = connection.query(`SELECT * FROM products WHERE category = '${category}'`, (error, results) => {
      if(error){
        res.json({ success : false, error : error})
      }else{
        // console.log(results)
        res.json({ success : false, results : results });
      }
    })
  })


  return router;
};

module.exports = productsRouter;
