const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events-controller')

  
router.put('/:id',eventsController.validateEvent);
  
router.delete('/:id', eventsController.deleteEvent)
  
router.post('/add', eventsController.addEvent);
  
router.get('/all_past_events', eventsController.getAllPastEvents);
  
  // router.get('/event_of_month', 
  //   setter.setParams, 
  //   eventsController.get_event_of_month, ( la fonction n'existe pas encore )
  //   setter.closeDBConnection
  // );


module.exports = router;
