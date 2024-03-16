const express = require('express')
const router = express.Router()
const ideasController = require('../controllers/ideas-controller')

router.post('/add/:ideaId', ideasController.addIdea)

router.put('/addLike/:id', ideasController.addIdeaLike)

router.delete('/removeLike/:id', ideasController.removeIdeaLike)

router.get('/showComments/:id', ideasController.getAllComments)

router.get('/all_ideas', ideasController.getAllIdeas)

router.get('/:ideaId', ideasController.getIdeaById)

router.delete('/:ideaId', ideasController.removeIdeById)

module.exports = router;