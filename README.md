# nanoid-dictionary
Predefined character sets to use with [nanoid](https://github.com/ai/nanoid). Used by [nanoid-generate](https://github.com/CyberAP/nanoid-generate).

[![npm](https://img.shields.io/npm/v/nanoid-dictionary)](https://www.npmjs.com/package/nanoid-dictionary)

## Usage

Install nanoid and dictionary

`npm i nanoid nanoid-dictionary`

Require a generator and pass a string from the dictionary

```javascript
const generate = require('nanoid/generate');
const dictionary = require('nanoid-dictionary');

const lowercaseRandomString = generate(dictionary.lowercase, 10);
```

Or instead you can require a specific dictionary

```javascript
const generate = require('nanoid/generate');
const englishLowercase = require('nanoid-dictionary/lowercase');

const lowercaseRandomString = generate(englishLowercase, 10);
```


## Character sets

### `numbers`

Numbers from 0 to 9

```javascript
const numbers = require('nanoid-dictionary/numbers');
```

### `lowercase`

Lowercase English letters.

Available both as `alphabets.lowercase` and simply `lowercase`.

```javascript
const englishLowercase = require('nanoid-dictionary/lowercase');
```

### `uppercase`

Uppercase English letters.

Available both as `alphabets.uppercase` and simply `uppercase`.

```javascript
const englishUppercase = require('nanoid-dictionary/uppercase');
```

### `alphanumeric`

Combination of all the smallcase, uppercase charaters and numbers from 0 to 9

Does not include any symbols or special characters

```javascript
const alphanumeric = require('nanoid-dictionary/alphanumeric');
```

### `nolookalikes`

Numbers and english alphabet without lookalikes: `1`, `l`, `I`, `0`, `O`, `o`, `u`, `v`, `5`, `S`, `s`, `2`, `Z`.

```javascript
const nolookalikes = require('nanoid-dictionary/nolookalikes');
```

### `nolookalikes-safe`

Same as `noolookalikes` but with removed vowels and following letters: `3`, `4`, `x`, `X`, `V`.

This list should protect you from accidentally getting obscene words in generated strings.

```javascript
const nolookalikesSafe = require('nanoid-dictionary/nolookalikes-safe');
```
