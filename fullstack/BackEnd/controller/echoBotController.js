const logger = require('../utils/logger');

//POST '/echobot'

const botResponse = (req, res, next) => {
    try{
    logger.info("/echobot  api called with body" + JSON.stringify(req.body));
    res.json({"botResponse": req.body.userInput});
    }
    catch(e){
        res.status(400).send('Invalid JSON string')
    }
};



module.exports = {botResponse};