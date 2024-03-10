const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events-controllers')

const eventsRouter = () =>{

  router.post('/add',eventsController.addEvent )

  router.post('/validate',eventsController.validateEvent )

  router.get('/all_past_events', eventsController.get_all_past_events )

  return router
  
}

module.exports = eventsRouter;
