function extract([beg, end]) {
    const matcher = new RegExp(`${beg}(.*?)${end}`,'gm');
    const normalise = (str) => str.slice(beg.length,end.length*-1);
    return function(str) {
        if(str.match(matcher)){
            return str.match(matcher).map(normalise);
        }
        
    }
}


const interpolate = (value, session = {}, options = {}) => {
    const stringExtractor = extract([options.leftDelimiter,options.rightDelimiter]);
    var s=stringExtractor(value)
    if(s){
    s.forEach((el)=>{console.log(options.leftDelimiter+el+options.rightDelimiter);
        
        if(el)value=value.replace(options.leftDelimiter+el+options.rightDelimiter,session[el]?session[el]:"");})
    }
    return value
};
    

var result = interpolate('Hi @@firstname@@ @@lastname@@, how are you today?', { firstname: 'John', lastname: 'Doe' }, { leftDelimiter: '@@', rightDelimiter: '@@' });

module.exports = { interpolate }