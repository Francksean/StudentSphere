const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/comments-controller')

  
router.post("/add", commentsController.addComment);

router.post("/show_comments", commentsController.showComments)

router.delete("/:id", commentsController.deleteComment)

module.exports = router;