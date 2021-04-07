# nanoid-dictionary
Predefined character sets to use with [nanoid](https://github.com/ai/nanoid). Used by [nanoid-generate](https://github.com/CyberAP/nanoid-generate).

[![npm](https://img.shields.io/npm/v/nanoid-dictionary)](https://www.npmjs.com/package/nanoid-dictionary)

## Usage

Install nanoid and dictionary

`npm i nanoid nanoid-dictionary`

Require a `customAlphabet` from `nanoid` and pass a string from the dictionary:

```javascript
import { customAlphabet } from 'nanoid';
import { lowercase } from 'nanoid-dictionary';

const lowercaseRandomString = customAlphabet(lowercase, 10);
```


## Character sets

### `numbers`

Numbers from 0 to 9

```javascript
import { numbers } from 'nanoid-dictionary';
```

### `lowercase`

Lowercase English letters: `abcdefghijklmnopqrstuvwxyz`

```javascript
import { lowercase } from 'nanoid-dictionary';
```

### `uppercase`

Uppercase English letters: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`

```javascript
import { uppercase } from 'nanoid-dictionary';
```

### `alphanumeric`

Combination of all the lowercase, uppercase characters and numbers from 0 to 9

Does not include any symbols or special characters

```javascript
import { alphanumeric } from 'nanoid-dictionary';
```

### `nolookalikes`

Numbers and english alphabet without lookalikes: `1`, `l`, `I`, `0`, `O`, `o`, `u`, `v`, `5`, `S`, `s`, `2`, `Z`.

Complete set: `346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz`

```javascript
import { nolookalikes } from 'nanoid-dictionary';
```

### `nolookalikesSafe`

Same as `noolookalikes` but with removed vowels and following letters: `3`, `4`, `x`, `X`, `V`.

This list should protect you from accidentally getting obscene words in generated strings.

Complete set: `6789BCDFGHJKLMNPQRTWbcdfghjkmnpqrtwz`

```javascript
import { nolookalikesSafe } from 'nanoid-dictionary';
```
