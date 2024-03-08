const express = require('express');
const router = express.Router();

// constante qui contient la route (importée et utilisée dans index.js)
const articleRouter = (connection) => {p
  router.get("/feed", async (req, res) => {

      const feed = await new Promise((resolve, reject) => {
        connection.query('SELECT * FROM products', (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
      res.status(200).json(feed);
    }
);

  return router;
};

module.exports = articleRouter;
