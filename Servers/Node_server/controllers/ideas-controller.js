const { date } = require('../utils/dateProvider');
const dbconnector = require('../utils/dbconnector');


exports.addIdea = (req, res) => {
  const { authorId, title, content } = req.body;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, 
  async () => {
    await connection.query(
      `CALL InsertIdea(${authorId}, '${title}', '${content}', '${date}')`,
      (error, results) => {
        if (error) {
          res.status(500).json({ message: "An error occurred while registering the idea" });
        } else {
          res.status(200).json({ message: "Idea proposed successfully", success: true, results: results });
        }
      }
    );
  });
};

exports.getIdeaById = (req, res) => {
  const { ideaId } = req.params;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, 
  async () => {
    await connection.query(
      `CALL GetIdeaById(${ideaId})`,
      (error, results) => {
        if (error) {
          res.status(500).json({ message: "An error occurred while fetching the idea" });
        } else {
          res.status(200).json({ message: "Idea returned successfully", success: true, results: results });
        }
      }
    );
  });
};


exports.getAllIdeas = (req, res) => {
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, 
  async () => {
    await connection.query(
      `CALL GetAllIdeas()`,
      (error, results) => {
        if (error) {
          res.status(500).json({ message: "An error occurred while fetching ideas" });
        } else {
          res.status(200).json({ message: "Ideas fetched successfully", success: true, results: results });
        }
      }
    );
  });
};


exports.removeIdeById = (req, res) => {
  const { ideaId } = req.params;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
  async () => {
    await connection.query(
      `CALL RemoveIdeaById(${ideaId})`,
      (error, results) => {
        if (error) {
          res.status(500).json({ message: "An error occurred while deleting the idea" });
        } else {
          res.status(200).json({ message: "Idea deleted successfully", success: true, results: results });
        }
      }
    );
  });
};