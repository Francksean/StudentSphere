const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events-controller')
const multer = require('../middlewares/profils-multer-config')

router.delete('/delete/:id', eventsController.deleteEvent)

router.get('/all_past_events', eventsController.getAllPastEvents);

router.get('/event/:id', eventsController.getEventById)

router.post('/add', multer, eventsController.addEvent);

router.put('/:id',eventsController.validateEvent);

router.put('/addLike/:id', eventsController.addEventLike)

router.delete('/removeLike/:id', eventsController.removeEventLike)

router.get('/showComments/:id', eventsController.getAllComments)

// router.get('/event_of_month', 
  //   setter.setParams, 
  //   eventsController.get_event_of_month, ( la fonction n'existe pas encore )
  //   setter.closeDBConnection
  // );


module.exports = router;
