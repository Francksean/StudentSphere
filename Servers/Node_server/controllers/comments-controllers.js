const express = require('express')
const date = require('../utils/dateProvider');
const db = require('../utils/dbconnector')




exports.addComment = (req, res) => {

  const { table, relativeIdName, authorId, relativeId, content } = req.body;

  const connection = res.locals.currentConnection

  const newComment = connection.query(    
    `INSERT INTO ${table} (authorId, ${relativeIdName}, content, datePosted) VALUES (${authorId}, ${relativeId}, '${content}', '${date}')`,
    (error, results) => {
      if (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: "An error occurred while inserting the comment", success : false, error : error });
      } else {
        res.status(200).json({ message: "Comment inserted successfully", success : true, results: results });
      }
    }
  );/*
      table est la table dans laquelle la requête sera effectuée
      relativeIdName est le nom dans la table manipulée, du paramètre ID de la table référencé
      Vu que le commentaire est posté à la même date que la requête est lancéé (en principe)
      on peut se permettre de juste créer un nouvel objet date et le passer en paramètre de la requête
    */
}

exports.showComments = (req, res) => {
  const { elemId } = req.params.id;
  const { table } = req.body;

  const connection = res.locals.currentConnection

  const comments = connection.query(
    `SELECT * FROM ${table} WHERE id = '${elemId}'`
  )

}

exports.deleteComment = (req, res) => {

  const { id } = req.params.id
  const { table } = req.body;

  const connection = res.locals.currentConnection


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
