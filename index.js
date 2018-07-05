var alphabets = {
    english: {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
};

var numbers = '0123456789';

module.exports = {
    alphabets: alphabets,
    numbers: numbers,
    filename:
        '_-,' +
        numbers +
        alphabets.english.lowercase +
        alphabets.english.uppercase
}