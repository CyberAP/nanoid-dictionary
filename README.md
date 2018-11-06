# nanoid-dictionary
Predefined character sets to use with [nanoid](https://github.com/ai/nanoid)

## Usage

Install nanoid and dictionary

`npm i nanoid nanoid-dictionary`

Require a generator and pass a string from the dictionary

```javascript
const generate = require('nanoid/generate');
const dictionary = require('nanoid-dictionary');

const englishLowercase = generate(dictionary.alphabets.english.lowercase, 10);
```

Or instead you can load only a particular dictionary

```javascript
const englishLowercase = generate('nanoid-dictionary/alphabets/english/lowercase', 10);
```


## Character sets

### `numbers`

Numbers from 0 to 9

### `alphabets`

#### `english`

##### `lowercase`

Lowercase English letters

##### `uppercase`

Uppercase English letters



## Helper functions

### `preventMisreadings(str, chars)`

It accepts a string and removes all the characters that look similar. You can pass your own character set if you want.

```javascript
const preventMisreadings = require('nanoid-dictionary/preventMisreadings');
const unsafeString = 'a1l0ob';

const safeString = preventMisreadings(unsafeString); \\ 'ab'
```

#### `str`

A string to process.

#### `chars`

An array of unsafe characters.

Deault unsafe characters are: `1`, `l`, `0`, `o`


```javascript

const preventMisreadings = require('nanoid-dictionary/preventMisreadings');
const unsafeString = 'a`\'b';
const unsafeChars = ['`', '\''];

const safeString = preventMisreadings(unsafeString, unsafeChars); \\ 'ab'

```

## Legacy character sets

### `filename`

Cross-platform character set for safe filename generation.

You probably don't need it anymore, latest `nanoid` is already using filesystem-safe base string.