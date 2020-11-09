# eslint-config-abouslimi

[![Travis](https://img.shields.io/travis/abouslimi/eslint-config-abouslimi.svg)](https://travis-ci.org/abouslimi/eslint-config-abouslimi)
[![npm](https://img.shields.io/npm/v/eslint-config-abouslimi.svg)](https://www.npmjs.com/package/eslint-config-abouslimi)
[![npm](https://img.shields.io/npm/dt/eslint-config-abouslimi.svg)](https://www.npmjs.com/package/eslint-config-abouslimi)

ESLint shareable config for my personal style.

## Installation

```bash
npm i -D eslint-config-abouslimi
```

## Usage

Create an eslint configuration file at the root of your project. This file can either be `.eslintrc`, `.eslintrc.json`, `.eslintrc.js` or `.eslintrc.yml`.

JSON config format example

```json
{
  "extends": "abouslimi"
}
```

Javascript config format example:

```javascript
module.exports = {
  extends: "abouslimi"
};
```

YAML config format example:

```yaml
extends: abouslimi
```

Config setup directly in `package.json`

```json
{
  "name": "your-new-package",
  "version": "1.0.0",
  "private": true,
  "devDependencies": {
    "eslint-config-abouslimi": "^1.0.0"
  },
  "eslintConfig": {
    "extends": "abouslimi"
  }
}
```

## Credits

* [Google: JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
