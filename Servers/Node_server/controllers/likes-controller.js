const dbconnector = require('../utils/dbconnector')


exports.addLike = (req, res) => {

  const { id } = req.params;
  const { table } = req.body;

  const connection = dbconnector.createConnection()
  dbconnector.initConnection

  const addLike = connection.query(
    `UPDATE ${table} SET likes = likes + 1 WHERE id = ${id}`,
    (error, results) => {
      if(error){
        res.status(401).json({ success : false, message : "problem while adding the like", results : results, error : error })
      }else{
        res.status(200).json({ success : true, message : "like added successfully", results : results })
      }
    }
  )
}

exports.removeLike = (req, res) => {

  const { id } = req.params;
  const { table } = req.body;  

  const connection = dbconnector.createConnection()
  dbconnector.initConnection

  const addLike = connection.query(
    `UPDATE TABLE ${table} SET likes = likes - 1 WHERE id = ${id}`,
    (error, results) => {
      if(error){
        res.status(401).json({ success : false, message : "problem while deleting the like", results : results, error : error })
      }else{
        res.status(200).json({ success : true, message : "like added successfully", results : results })
      }
    }
  )
}

exports.getLikeNumber = (req, res) => {

  const { id } = req.params;
  const { table } = req.body;

  const connection = dbconnector.createConnection()
  dbconnector.initConnection

  const numberOfUser = connection.query(
    `SELECT likes FROM ${table} WHERE name = '${id}'`,
    (error, resuslts) => {
    if (error) {
      res.status(500).json({ message: "An error occurred while fetching number of like" });
    } else {
      res.status(200).json({ message: "number of like fetched successfully", success : true, results: results });
    }
  })
}