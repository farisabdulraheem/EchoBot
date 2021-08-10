const logger = require('../utils/logger');

//POST '/echobot'

const botResponse = (req, res, next) => {
    try {
        logger.info("/echobot  api called with body" + JSON.stringify(req.body));
        if (req.body.userInput && req.body.userInput != "") {
            res.json({ "botResponse": req.body.userInput });
        }
        else {
            res.status(400).send({ "botResponse": "Invalid JSON string" });
        }
    }
    catch (e) {
        res.status(400).send("Some error occured");
    }
};



module.exports = { botResponse };