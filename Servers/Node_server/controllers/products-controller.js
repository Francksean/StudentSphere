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

exports.getAllComments = (req, res) => {
  const { id } = req.params
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, 
  async () => {
    try {
      const results = await new Promise((resolve, reject) => {
        connection.query(`CALL ShowProductComments(?)`, [id], (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
      
      res.status(200).json({ message: "Commentaires chargés", success: true, results: results });
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({ message: "Une erreur s'est produite lors de la recherche des commentaires", success: false, error: error });
    } finally {
      connection.end();
    }
  });
}

exports.addProductLike = (req, res) => {
  const { id } = req.params;
  
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
  async () => {
    await connection.query(
      'CALL AddProductLike(?)',
      [id],
      (error, results) => {
        if (error) {
          res.status(401).json({ success: false, message: "Problem while adding the like", results: results, error: error });
        } else {
          res.status(200).json({ success: true, message: "Like added successfully", results: results });
        }
      }
    );
  })
}

exports.removeProductLike = (req, res) => {
  const { id } = req.params;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
  async () => {
    await connection.query(
      'CALL RemoveProductLike(?)',
      [id],
      (error, results) => {
        if (error) {
          res.status(401).json({ success: false, message: "Problem while deleting the like", results: results, error: error });
        } else {
          res.status(200).json({ success: true, message: "Like deleted successfully", results: results });
        }
      }
    );
  })

};

exports.getLikeNumber = (req, res) => {
  const { id } = req.params;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
    async () => {
    await connection.query(
      'CALL GetProductLikeNumber(?)',
      [id],
      (error, results) => {
        if (error) {
          res.status(500).json({ message: "An error occurred while fetching number of likes" });
        } else {
          const likeCount = results[0];
          res.status(200).json({ message: "Number of likes fetched successfully", success: true, likeCount: likeCount });
        }
      }
    );
  })
};