function extract([beg, end]) {
    const matcher = new RegExp(`${beg}(.*?)${end}`, 'gm');
    const normalise = (str) => str.slice(beg.length, end.length * -1);
    return function (str) {
        if (str.match(matcher)) {
            return str.match(matcher).map(normalise);
        }

    }
}


const interpolate = (value, session = {}, options = {}) => {
    const stringExtractor = extract([options.leftDelimiter, options.rightDelimiter]);
    var extractValue = stringExtractor(value)
    if (extractValue) {
        extractValue.forEach((element) => {

            if (element) value = value.replace(options.leftDelimiter + element + options.rightDelimiter, session[element] ? session[element] : "");
        })
    }
    return value
};

module.exports = { interpolate }