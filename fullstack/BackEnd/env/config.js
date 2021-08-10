var devConfig = require('./default');
var prodConfig = require('./production');
function config() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return devConfig;
    } else {
        return prodConfig;

    }
}
module.exports = config;
