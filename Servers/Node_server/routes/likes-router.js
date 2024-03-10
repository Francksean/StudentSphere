const express = require('express')

const router = express.Router()

const likesRouter = () =>{

  router.post('/add', (req, res) => {
    const { table, elementId } = req.body;

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
  })

  router.post('/remove', (req, res) => {
    const { table, elementId } = req.body;

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
  })


  return router;
}

module.exports = likesRouter