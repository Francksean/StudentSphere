const express = require('express');
const router = express.Router();

const userRouter = (connection) => {
  router.post("/connexion", async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).send("Email and password are required");
      }

      const user = await new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });

      if (user.length > 0) {
        console.log(user[0]);
        res.status(200).json(user[0]);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      console.error("Error querying database:", error);
      res.status(500).send("Internal server error");
    }
  });

  return router;
};

module.exports = userRouter;
