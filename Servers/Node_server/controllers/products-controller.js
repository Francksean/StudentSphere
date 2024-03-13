const dbconnector = require('../utils/dbconnector');

exports.getAllProducts = (req, res) => {
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, 
    async () => {
    const query = 'CALL GetAllProducts()';
    await connection.query(query, (error, results) => {
      if (error) {
        console.log(error)
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
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, 
  async () => {
    const query = 'CALL GetProductsByCategory(?)';
    await connection.query(query, [category], (error, results) => {
      if (error) {
        console.log(error)
        res.status(500).json({ success: false, error: error });
      } else {
        res.status(200).json({ success: true, results: results[0] });
      }
      dbconnector.endConnection(connection);
    });
  });
};

exports.getProductsByName = (req, res) => {
  const { productName } = req.params;
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, 
  async () => {
    const query = 'CALL GetProductsByName(?)';
    await connection.query(query, [productName], (error, results) => {
      if (error) {
        console.log(error)
        res.status(500).json({ success: false, error: error });
      } else {
        res.status(200).json({ success: true, results: results[0] });
      }
      dbconnector.endConnection(connection);
    });
  });
};

exports.getProductsById = (req, res) => {
  const { id } = req.params;
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, 
  async () => {
    const query = 'CALL GetProductById(?)';
    await connection.query(query, [id], (error, results) => {
      if (error) {
        console.log(error)
        res.status(500).json({ success: false, error: error });
      } else {
        res.status(200).json({ success: true, results: results[0] });
      }
      dbconnector.endConnection(connection);
    });
  });
};