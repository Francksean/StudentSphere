const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/comments-controller')

  
router.post("/add", commentsController.addComment);

router.get("/show_comment/:id", commentsController.showCommentById);

router.delete("/:commentId", commentsController.deleteComment);

router.post('/show_comments', commentsController.showAllCommentsForElement)

module.exports = router;