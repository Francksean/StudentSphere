const express = require('express')

const db = require('../utils/dbconnector')

exports.get_all_products = (req, res) => {

  const connection = db.createConnection();
  db.initConnection(connection)

  const feed = connection.query('SELECT * FROM products', (error, results) => {
    if(error){
      res.json({ success : false, message : "Problème lors du chargement des produits ",error : error });
    }else{
      res.json({ success : true, results : results });
    }
  });

  connection.end()
}

exports.get_product_by_category = (req, res) => {

  const connection = db.createConnection();
  db.initConnection(connection)

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

  connection.end()

}