# nanoid-dictionary
Predefined character sets to use with [nanoid](https://github.com/ai/nanoid)

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

### `nolookalikes`

Numbers and english alphabet without lookalikes: `1`, `l`, `I`, `0`, `O`, `o`, `u`, `v`

```javascript
const nolookalikes = require('nanoid-dictionary/nolookalikes');
```
