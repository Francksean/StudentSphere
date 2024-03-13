const dbconnector = require('../utils/dbconnector');

exports.addLike = (req, res) => {
  const { id } = req.params;
  const { table } = req.body;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
  async () => {
    await connection.query(
      'CALL AddLike(?, ?)',
      [table, id],
      (error, results) => {
        if (error) {
          res.status(401).json({ success: false, message: "Problem while adding the like", results: results, error: error });
        } else {
          res.status(200).json({ success: true, message: "Like added successfully", results: results });
        }
      }
    );
  })
};

exports.removeLike = (req, res) => {
  const { id } = req.params;
  const { table } = req.body;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
  async () => {
    await connection.query(
      'CALL RemoveLike(?, ?)',
      [table, id],
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
  const { table } = req.body;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
    async () => {
    await connection.query(
      'CALL GetLikeNumber(?, ?)',
      [table, id],
      (error, results) => {
        if (error) {
          res.status(500).json({ message: "An error occurred while fetching number of likes" });
        } else {
          const likeCount = results[0][0]['@likeCount'];
          res.status(200).json({ message: "Number of likes fetched successfully", success: true, likeCount: likeCount });
        }
      }
    );
  })
};