const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events-controllers')

const eventsRouter = () =>{

  router.post('/add', eventsController.addEvent);
  
  router.get('/all_past_events', eventsController.get_all_past_events);
  
  // router.get('/event_of_month', 
  //   setter.setParams, 
  //   eventsController.get_event_of_month, ( la fonction n'existe pas encore )
  //   setter.closeDBConnection
  // );

  router.put('/:id',eventsController.validateEvent);

  router.delete('/:id', eventsController.deleteEvent)

  return router

}

module.exports = eventsRouter;
