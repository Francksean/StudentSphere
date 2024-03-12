const date = require('../utils/dateProvider');
const dbconnector = require('../utils/dbconnector')

exports.addComment = (req, res) => {
  const { table, relativeIdName, authorId, relativeId, content } = req.body;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, () => {
    const query = `CALL InsertComment(${authorId}, ${relativeId}, '${content}', '${date}')`;

    connection.query(query, (error, results) => {
      if (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: "An error occurred while inserting the comment", success: false, error: error });
      } else {
        res.status(200).json({ message: "Comment inserted successfully", success: true, results: results });
      }
    });
  });
};

exports.showComments = (req, res) => {
  
  const { id } = req.params;
  const { table } = req.body;

  const connection = dbconnector.createConnection()
  dbconnector.initConnection

  const comments = connection.query(
    `SELECT * FROM ${table} WHERE id = '${id}'`
  )

}

exports.deleteComment = (req, res) => {

  const { id } = req.params
  const { table } = req.body;

  const connection = dbconnector.createConnection()
  dbconnector.initConnection

  const deletedComment = connection.query(`DELETE FROM ${table} WHERE id = '${id}'`, 
  (error, results) => {
    if(error){
      console.log(`${error}`)
      res.send({ message : "une erreur s'est produite lors de la suppression", success : false, error : error })
    }else{
      res.send({ message : "commentaire supprimé avec succès", success : true, results: results})
    }
  })
}
