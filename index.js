var lowercase = require('./lowercase');
var uppercase = require('./uppercase');
var numbers = require('./numbers');
var filename = require('./filename');
var lookalikes = require('./lookalikes');
var preventMisreadings = require('./preventMisreadings');

var alphabets = {
    lowercase: lowercase,
    uppercase: uppercase,
};

module.exports = {
    alphabets: alphabets,
    lowercase: lowercase,
    uppercase: uppercase,
    numbers: numbers,
    filename: filename,
    lookalikes: lookalikes,
    preventMisreadings: preventMisreadings
}