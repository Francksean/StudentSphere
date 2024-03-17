const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events-controller')
const multer = require('../middlewares/profils-multer-config')

router.delete('/delete/:id', eventsController.deleteEvent)

router.get('/all_past_events', eventsController.getAllPastEvents);

router.get('/all_validated_events', eventsController.getAllValidatedEvents)

router.get('/showEvent/:id', eventsController.getEventById)

router.put('/addLike/:id', eventsController.addEventLike)

router.delete('/removeLike/:id', eventsController.removeEventLike)

router.delete('/deleteComment/:commentId', eventsController.removeComment)

router.get('/showComments/:id', eventsController.getAllComments)

router.get('/show_scheduled_events', eventsController.getAllScheduledEvent)

router.get('/show_month_events', eventsController.getMonthEvents)

router.post('/add', multer, eventsController.addEvent);

router.post('/addBdeEvent', multer, eventsController.addBdeEvent);

router.put('/addComment', eventsController.addComment)

router.put('/:id',eventsController.validateEvent);



module.exports = router;
