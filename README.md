# nanoid-dictionary
Predefined character sets to use with [nanoid](https://github.com/ai/nanoid)

## Usage

Install nanoid and dictionary

`npm i nanoid nanoid-dictionary`

Require a generator and pass a string from the dictionary

```javascript
const generate = require('nanoid/generate');
const dictionary = require('nanoid-dictionary');

const englishLowercase = generate(dictionary.lowercase, 10);
```

Or instead you can load only a particular dictionary

```javascript
const englishLowercase = generate('nanoid-dictionary/lowercase', 10);
```


## Character sets

### `numbers`

Numbers from 0 to 9

```javascript
const numbers = require('nanoid-dictionary/numbers');
```

### `alphabets`

#### `lowercase`

Lowercase English letters.

Available both as `alphabets/lowercase` and simply `lowercase`.

```javascript
const englishLowercase = require('nanoid-dictionary/lowercase');
```

#### `uppercase`

Uppercase English letters.

Available both as `alphabets/uppercase` and simply `uppercase`.

```javascript
const englishUppercase = require('nanoid-dictionary/uppercase');
```

### `lookalikes`

Characters that have lookalikes: `1`, `l`, `0`, `O`

```javascript
const lookalikes = require('nanoid-dictionary/lookalikes');
```



## Helper functions

### `preventMisreadings(str, unsafeChars)`

It accepts a string and removes all the characters that look similar. You can pass your own optional character set if you want.

```javascript
const preventMisreadings = require('nanoid-dictionary/preventMisreadings');
const unsafeString = 'a1l0ob';

const safeString = preventMisreadings(unsafeString); \\ 'ab'
```

#### `str`

A string to process.

#### `unsafeChars`

An optional string that contains only unsafe characters.

Deault unsafe character set is taken from `lookalikes`.

```javascript

const preventMisreadings = require('nanoid-dictionary/preventMisreadings');
const unsafeString = 'a`\'b';
const unsafeChars = '`\'';

const safeString = preventMisreadings(unsafeString, unsafeChars); \\ 'ab'

```

## Legacy character sets

### `filename`

Cross-platform character set for safe filename generation.

You probably don't need it anymore, latest `nanoid` is already using filesystem-safe base string.