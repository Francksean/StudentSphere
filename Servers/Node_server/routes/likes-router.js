const express = require('express')
const router = express.Router()
const likeController = require('../controllers/likes-controller')

router.post('/add', likeController.addLike)

router.delete('/remove/:id', likeController.removeLike)

module.exports = router;