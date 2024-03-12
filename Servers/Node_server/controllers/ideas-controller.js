const { date } = require('../utils/dateProvider');
const dbconnector = require('../utils/dbconnector')


exports.addIdea = (req, res) => {

  const { authorId, title, content } = req.body;

  const connection = dbconnector.createConnection()
  dbconnector.initConnection

  const newIdea = connection.query(
    `INSERT INTO ideas (authorIdn, title, content, datePosted)
    VALUES (${authorId}, '${title}, '${content}', '${date}')`,
    (error, resuslts) => {
    if (error) {
      res.status(500).json({ message: "An error occurred while registering the idea" });
    } else {
      res.status(200).json({ message: "idea proposed successfully", success : true, results: results });
    }
  })
}

exports.getIdeaById = (req, res) => {

  const { ideaId } = req.params;

  const connection = dbconnector.createConnection()
  dbconnector.initConnection

  const selectedIdea = connection.query(
    `SELECT * FROM ideas WHERE id = ${ideaId}`,
    (error, resuslts) => {
    if (error) {
      res.status(500).json({ message: "An error occurred while fetchig the idea" });
    } else {
      res.status(200).json({ message: "idea returned successfully", success : true, results: results });
    }
  })
}


exports.getAllIdeas = (req, res) => {

  const connection = dbconnector.createConnection()
  dbconnector.initConnection

  const newIdea = connection.query(
    `SELECT * FROM ideas`,
    (error, resuslts) => {
    if (error) {
      res.status(500).json({ message: "An error occurred while fetching ideas" });
    } else {
      res.status(200).json({ message: "ideas fetcehd successfully", success : true, results: results });
    }
  })
}


exports.removeIdeById = (req, res) => {

  const { ideaId } = req.params;

  const connection = dbconnector.createConnection()
  dbconnector.initConnection

  const selectedIdea = connection.query(
    `DELETE FROM ideas WHERE id = ${ideaId}`,
    (error, resuslts) => {
    if (error) {
      res.status(500).json({ message: "An error occurred while deleting the idea" });
    } else {
      res.status(200).json({ message: "idea deleted successfully", success : true, results: results });
    }
  })
}
