const express = require('express');
const router = express.Router();

const userRouter = (connection) => {
  router.post("/connexion", async (req, res) => {
      const { email, password } = req.body;

      const user = await new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
          if (error) {
            reject(error);
          } else {
            console.log(`results : ${results}`)
            resolve(results);
          }
        });
      });
      console.log(user);
      res.status(200).json(user[0]);
    }
);

  return router;
};

module.exports = userRouter;
