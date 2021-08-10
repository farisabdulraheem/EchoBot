const express = require('express');
const app = express();
var config = require("./env/config");
const port = config.port || process.env.PORT || 3001;
const host = config.host || process.env.host || "localhost";
const logger = require('./utils/logger');
const compression = require('compression');
const routes = require('./routes/echobot');
const cors = require('cors');


app.use(express.json());

app.use(compression());
app.use(cors())

app.use("/", routes);

app.use(function (req, res, next) {
  var allowedorigin = ["http://${host}:${port}"]
  const origin = req.headers.origin;
  if (allowedorigin.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin); // update to match the domain you will make the request from
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.use((err, req, res, next) => {
  res.status(500).send('Server Error!');
  logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
})

if (process.env.NODE_ENV === "development") {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
}

if (process.env.NODE_ENV === "production") {
  app.use(express.errorHandler())
}


// Capture 404 erors
app.use((req, res, next) => {
  res.status(404).send("PAGE NOT FOUND");
  logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
})


app.listen(port, () => {
  console.log(`App listening at http://${host}:${port}`)
  logger.info(`Server started and running on http://${host}:${port}`)
})

module.exports = { app }