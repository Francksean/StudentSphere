const express = require('express')
const router = express.Router()
const ideasController = require('../controllers/ideas-controller')

router.post('/add/:id', ideasController.addIdea)

router.get('/all_ideas', ideasController.getAllIdeas)

router.get('/:id', ideasController.getIdeaById)

module.exports = router;