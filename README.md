# nanoid-dictionary
Predefined character sets to use with [nanoid](https://github.com/ai/nanoid). Used by [nanoid-generate](https://github.com/CyberAP/nanoid-generate).

[![npm](https://img.shields.io/npm/v/nanoid-dictionary)](https://www.npmjs.com/package/nanoid-dictionary)

## Usage

Install nanoid and dictionary

`npm i nanoid nanoid-dictionary`

```javascript
const nanoidDic      = require('nanoid-dictionary');
const customAlphabet = require('nanoid').customAlphabet;
const nanoid         = customAlphabet(nanoidDic.lowercase, 10);

let id = nanoid();
console.log(id);
```

Or instead you can require a specific dictionary

```javascript
const nanoidDic      = require('nanoid-dictionary/lowercase');
const customAlphabet = require('nanoid').customAlphabet;
const nanoid         = customAlphabet(nanoidDic, 10);

let id = nanoid();
console.log(id);
```

**TypeScript**

Install nanoid and dictionary

`npm i nanoid nanoid-dictionary`
`npm i @types/nanoid-dictionary --save-dev`

```typescript
import * as NANOID_DIC    from 'nanoid-dictionary';
import { customAlphabet } from 'nanoid';

const nanoid         = customAlphabet(NANOID_DIC.lowercase, 10);

let id = nanoid();
console.log(id);
```

Or instead you can require a specific dictionary

```typescript
import { lowercase as NANOID_DIC } from 'nanoid-dictionary';
import { customAlphabet }          from 'nanoid';

const nanoid         = customAlphabet(NANOID_DIC, 10);

let id = nanoid();
console.log(id);
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
