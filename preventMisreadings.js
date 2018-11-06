var confusingCharPairs = [['1', 'l'], ['0', 'o']];
var hasSymbol = function(symbol) {
    return function(str) {
        return str.indexOf(symbol) > -1;
    };
};
var matchAllOccurences = function(symbol) {
    return new RegeExp(symbol + '+', 'gi');
};

module.exports = function(str, pairs) {
    pairs = pairs || confusingCharPairs;
    pairs.forEach(function(pair) {
        var leftSymbol = pair[0];
        var rightSymbol = pair[1];
        var hasLeftSymbol = hasSymbol(leftSymbol);
        var hasRightSymbol = hasSymbol(rightSymbol);
        if (hasLeftSymbol(str) && hasRightSymbol(str)) {
            str = str
                .replace(matchAllOccurences(leftSymbol), '')
                .replace(matchAllOccurences(rightSymbol), '');
        }
    })
    return str;
}