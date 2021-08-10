// routes/api/echobot.js
const express = require('express');
const router = express.Router();
const echoBotController = require('../controller/echoBotController.js');

router.post('/echobot', echoBotController.botResponse);


module.exports = router;