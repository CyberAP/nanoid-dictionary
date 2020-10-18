# Change log

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
