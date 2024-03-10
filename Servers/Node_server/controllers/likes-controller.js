const dbconnector = require('../utils/dbconnector')


exports.addLike = (req, res) => {

  const { table, elementId } = req.body;

  const connection = dbconnector.createConnection()
  dbconnector.initConnection

  const addLike = connection.query(
    `UPDATE TABLE ${table} SET likes = likes + 1 WHERE id = ${elementId}`,
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

  const { table, elementId } = req.body;  

  const connection = dbconnector.createConnection()
  dbconnector.initConnection

  const addLike = connection.query(
    `UPDATE TABLE ${table} SET likes = likes - 1 WHERE id = ${elementId}`,
    (error, results) => {
      if(error){
        res.status(401).json({ success : false, message : "problem while deleting the like", results : results, error : error })
      }else{
        res.status(200).json({ success : true, message : "like added successfully", results : results })
      }
    }
  )
}