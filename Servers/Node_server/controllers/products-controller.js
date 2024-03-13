const dbconnector = require('../utils/dbconnector')


exports.getAllProducts = (req, res) => {
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, () => {
    const query = 'CALL GetAllProducts()';
    connection.query(query, (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Problème lors du chargement des produits', error: error });
      } else {
        res.status(200).json({ success: true, results: results[0] });
      }
      dbconnector.endConnection(connection);
    });
  });
};

exports.getProductsByCategory = (req, res) => {

  const { category } = req.body;

  const connection = dbconnector.createConnection()
  dbconnector.initConnection
  /*
    une alternaive serait :
    const feed = connection.query(`SELECT * FROM products WHERE category = ?`, [category], (error, results) => {
  */
  const feed = connection.query(`SELECT * FROM products WHERE category = '${category}'`, 
  (error, results) => {
    if(error){
      res.json({ success : false, error : error})
    }else{
      res.json({ success : false, results : results });
    }
  })
}


exports.getProductsByName = (req, res) => {

  const { productName } = req.body;

  const connection = dbconnector.createConnection()
  dbconnector.initConnection

  const newIdea = connection.query(
    `SELECT * FROM products WHERE name = '${productName}'`,
  (error, resuslts) => {
    if (error) {
      res.status(500).json({ message: "An error occurred while fetching the product" });
    } else {
      res.status(200).json({ message: "product proposed successfully", success : true, results: results });
    }
  })
}

exports.getProductsById = (req, res) => {

  const { id } = req.params;

  const connection = dbconnector.createConnection()
  dbconnector.initConnection

  const newIdea = connection.query(
    `SELECT * FROM products WHERE id = ${id}`,
  (error, resuslts) => {
    if (error) {
      res.status(500).json({ message: "An error occurred while fetching the product" });
    } else {
      res.status(200).json({ message: "product proposed successfully", success : true, results: results });
    }
  })
}
