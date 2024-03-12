const express = require('express')
const router = express.Router()
const ideasController = require('../controllers/ideas-controller')

router.post('/add/:ideaId', ideasController.addIdea)

router.get('/all_ideas', ideasController.getAllIdeas)

router.get('/:ideaId', ideasController.getIdeaById)

router.delete('/:ideaId', ideasController.removeIdeById)

module.exports = router;