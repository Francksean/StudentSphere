const dbconnector = require('../utils/dbconnector');


exports.getUserBrief = (req, res) => {
  const { userId } = req.params
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, 
  async () => {
    await connection.query(
      `SELECT firstname, secondname, profilePic From users WHERE id=${userId} `,
      (error, results) => {
        if (error) {
          res.status(500).json({ message: "An error occurred while getting user brief" });
        } else {
          res.status(200).json({ message: "user brief fetched successfully", success: true, results: results });
        }
      }
    );
  });
};