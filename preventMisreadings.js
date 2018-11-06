var lookalikes = require('./lookalikes');

var matchAllOccurences = function(symbol) {
    return new RegExp(symbol + '+', 'gi');
};

module.exports = function(str, chars) {
    chars = chars || lookalikes;
    chars.split('').forEach(function(char) {
        str = str.replace(matchAllOccurences(char), '');
    })
    return str;
}