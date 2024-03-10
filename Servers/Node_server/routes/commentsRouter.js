const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/comments-controllers')

const commentsRouter = () => {
  
  router.post("/add", commentsController.addComment);

  router.post("/delete", commentsController.deleteComment)
  
  return router;
}

module.exports = commentsRouter;