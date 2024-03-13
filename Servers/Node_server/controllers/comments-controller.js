const date = require('../utils/dateProvider');
const dbconnector = require('../utils/dbconnector')

exports.addComment = (req, res) => {
  const { table, relativeIdName, authorId, relativeId, content } = req.body;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection)
  async() => {
    const currentDate = date();
    const query = `CALL InsertComment(${authorId}, ${relativeId}, '${content}', '${date}')`;

    await connection.query(query, (error, results) => {
      if (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: "Une erreur s'est produite lors de l'ajout du commentaire", success: false, error: error });
      } else {
        res.status(200).json({ message: "Commentaire ajouté avec succès", success: true, results: results });
      }
    });
  };
};

exports.showComments = (req, res) => {
  const { commentId } = req.params;
  const { table } = req.body;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(() => {
    const currentDate = date();
    connection.query('CALL ShowComments(?, ?)', [table, commentId], (error, results) => {
      if (error) {
        console.log(`${error}`);
        res.send({ message: "Une erreur s'est produite lors de la récupération des commentaires", success: false, error: error });
      } else {
        res.send({ message: "Commentaires récupérés avec succès", success: true, results: results });
      }
    });
  });
};

exports.deleteComment = (req, res) => {
  const { commentId } = req.params;
  const { table } = req.body;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(() => {
    const currentDate = date();
    connection.query('CALL DeleteComment(?, ?)', [table, commentId], (error, results) => {
      if (error) {
        console.log(`${error}`);
        res.send({ message: "Une erreur s'est produite lors de la suppression du commentaire", success: false, error: error });
      } else {
        res.send({ message: "Commentaire supprimé avec succès", success: true, results: results });
      }
    });
  });
};
