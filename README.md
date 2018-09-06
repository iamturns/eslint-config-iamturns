# eslint-config-iamturns

ESLint rules for my projects.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

ESLint will only look into your project `/node_modules` for plugins.

Install `eslint-config-iamturns` and all peer dependencies:

```bash
npx install-peerdeps --dev eslint-config-iamturns
```

Within `eslintrc.js`:

```javascript
module.exports = {
	extends: ["iamturns"],
}
```

## License

Open source software [licensed as MIT](https://github.com/iamturns/iamturns-scripts/blob/master/LICENSE).
