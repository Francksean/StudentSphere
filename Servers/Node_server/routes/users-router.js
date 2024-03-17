const express = require('express');
const userController = require('../controllers/users-controllers')

const router = express.Router()

router.get('/userBrief/:userId', userController.getUserBrief)


module.exports = router