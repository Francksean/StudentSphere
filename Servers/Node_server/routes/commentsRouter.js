const express = require('express');
const date = require('../dateProvider');
const router = express.Router();

const commentsRouter = ( connection ) => {
  

  router.post("/add", (req, res) => {
    const { table, relativeIdName, authorId, relativeId, content } = req.body;

    const newComment = connection.query(    
      `INSERT INTO ${table} (authorId, ${relativeIdName}, content, datePosted) VALUES (${authorId}, ${relativeId}, '${content}', '${date}')`,
      (error, results) => {
        if (error) {
          console.error(`Error: ${error}`);
          res.status(500).json({ message: "An error occurred while inserting the comment" });
        } else {
          res.status(200).json({ message: "Comment inserted successfully", isOk : true, results: results });
        }
      }
    );
  });

  //table est la table dans laquelle la requête sera effectuée
  //relativeIdName est le nom dans la table manipulée, du paramètre ID de la table référencé
  //Vu que le commentaire est posté à la même date que la requête est lancéé (en principe)
  //on peut se permettre de juste créer un nouvel objet date et le passer en paramètre de la requête

  router.post("/delete", (req, res) => {
    const { table, commentId } = req.body;

    const deletedComment = connection.query(`DELETE FROM ${table} WHERE id = '${commentId}'`, 
    (error, results) => {
      if(error){
        console.log(`${error}`)
        res.send({ message : "une erreur s'est produite lors de la suppression" })
      }else{
        res.send({isOk : true, results: results})
      }
    })

  })
  
  return router;
}

module.exports = commentsRouter;