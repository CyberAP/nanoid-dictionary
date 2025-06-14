# Change log

## 5.0.0

- Stable release
- Added ESM, UMD support
- **BREAKING**: Removed path imports (`const numbers = require('nanoid-dictionary/numbers')`)
- Added `cookieSafe` and `cookieUnsafe` sets [#14](https://github.com/CyberAP/nanoid-dictionary/issues/14)

## 5.0.0-beta.1

- **BREAKING**: Removed path imports (`const numbers = require('nanoid-dictionary/numbers')`)
- Rewritten commonjs modules to es modules, added a build step
- Added support for commonjs, umd and browser builds

## 4.3.0

- Updated Readme to include updated instructions (thanks [@kyle-chine-leismore](https://github.com/kyle-chine-leismore)), added sets preview
- Updated examples to use ES imports, removed examples for direct file imports ( `nanoid-dictionary/lowercase.js`, etc.)
- Added typings
- Simplified index.js

## 4.2.0

- Added `alphanumeric` set ([#7](https://github.com/CyberAP/nanoid-dictionary/pull/7)) by [@anshulsahni](https://github.com/anshulsahni)

## 4.1.0

- Added `nolookalikes-safe` set to protect from accidental obscene words

## 4.0.0

- Removed `2` and `Z` ([#5](https://github.com/CyberAP/nanoid-dictionary/pull/5)) by [@kripod](https://github.com/kripod)

## 3.0.0

- Removed `5`, `S` and `s` from `nolookalikes` alphabet, due to similarities on some fonts

## 2.0.0

- Removed `alphabets` and `filename` sets (lowercase and uppercase still available)
- Removed `preventMisreadings` function
- Added `nolookalikes` set

## 1.1.0

- Added changelog
- Moved to flat modular structure
- Added lookalikes set
- Added preventMisreadings helper function to remove similar looking characters, using lookalikes set
- Marked filename as legacy, nanoid has filename-safe base string now
