const express = require('express');
const router = express.Router();


const commentsRouter = ( connection ) => {

  router.post("/add", (req, res)=>{
    //table est la table dans laquelle la requête sera effectuée
    //relativeIdName est le nom dans la table manipulée, du paramètre ID de la table référencé
    const { table, relativeIdName, authorId, relativeId, content  } = req.body;

    const newComment = connection.query(`INSERT INTO ${table} (authorId,${relativeIdName}, content) VALUES (${authorId},${relativeId},${new Date()},"${content}")`,
    (error, results) => {
      if(error){
        console.log(`\n\n\n\n${error}\n\n\n\n`)
        res.send({ message : "une erreur s'est produite lors de l'insertion" })
      }else{
        console.log(results)
        res.send({message : "ok"})
      }
    });
    //Vu que le commentaire est posté à la même date que la requête est lancéé (en principe)
    //on peut se permettre de juste créer un nouvel objet date et le passer en paramètre de la requête
  })

  router.post("/delete", (req, res) => {
    const { table, commentId } = req.body;
    const deletedComment = connection.query(`DELETE FROM ${table} WHERE id = '${commentId}'`, 
    (error, results) => {
      if(error){
        console.log(`\n\n\n\n${error}\n\n\n\n`)
        res.send({ message : "une erreur s'est produite lors de la suppression" })
      }else{
        console.log(results)
        res.send({message : "ok"})
      }
    })
  })

}

module.exports = commentsRouter;