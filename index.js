var lowercase = require('./alphabets/english/lowercase');
var uppercase = require('./alphabets/english/uppercase');
var numbers = require('./numbers');
var filename = require('./legacy/filename');
var preventMisreadings = require('./preventMisreadings');

var alphabets = {
    english: {
        lowercase: lowercase,
        uppercase: uppercase
    }
};

module.exports = {
    alphabets: alphabets,
    numbers: numbers,
    filename: filename,
    preventMisreadings: preventMisreadings
}