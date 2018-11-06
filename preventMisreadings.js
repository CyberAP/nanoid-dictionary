var confusingChars = ['1', 'l', '0', 'o'];
var matchAllOccurences = function(symbol) {
    return new RegExp(symbol + '+', 'gi');
};

module.exports = function(str, chars) {
    chars = chars || confusingChars;
    chars.forEach(function(char) {
        str = str.replace(matchAllOccurences(char), '');
    })
    return str;
}