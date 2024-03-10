const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events-controllers')
const headerSetter = require('../middlewares/headerSetter')

const eventsRouter = () =>{

  router.post('/add', headerSetter.set ,eventsController.addEvent )

  router.post('/validate',headerSetter.set, eventsController.validateEvent )

  router.get('/all_past_events', headerSetter.set, eventsController.get_all_past_events )

  return router
  
}

module.exports = eventsRouter;
