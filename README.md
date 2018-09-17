# eslint-config-iamturns

> ESLint rules for my projects.

Combination of [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for linting, and [Prettier](https://prettier.io) for automatic code formatting.

Supports modern JavaScript: es2018, modules, jsx, jest, etc.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
  - [Prettier](#prettier)
  - [Plugins](#plugins)
- [FAQ](#faq)
  - [Why do I need to install ESLint plugins myself?](#why-do-i-need-to-install-eslint-plugins-myself)
  - [I do not require all the enabled features (es2018, jest, etc)](#i-do-not-require-all-the-enabled-features-es2018-jest-etc)
  - [Why use Prettier? Why not just use ESLint alone?](#why-use-prettier-why-not-just-use-eslint-alone)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Maintaining](#maintaining)
- [Author](#author)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Install `eslint-config-iamturns` and required peer dependencies:

```bash
npx install-peerdeps --dev eslint-config-iamturns
```

Within your ESLint config file:

```javascript
module.exports = {
  extends: ["iamturns"],
  rules: {},
}
```

See [generator-iamturns-js](https://github.com/iamturns/generator-iamturns-js) for example setup.

### Prettier

This project assumes you are using [Prettier](https://prettier.io), which automatically handles most of the style-based linting rules.

### Plugins

The following ESLint plugins may also be installed. They will be automatically detected and configured for you.

- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
  - Validate proper ES6 imports
  - `npm install eslint-plugin-import --save-dev`
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
  - Check accessibility rules on JSX elements
  - `npm install eslint-plugin-jsx-a11y --save-dev`
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
  - React specific linting rules
  - `npm install eslint-plugin-react --save-dev`

## FAQ

### Why do I need to install ESLint plugins myself?

ESLint only loads plugins relative to your project (see [eslint/eslint#10643](https://github.com/eslint/eslint/issues/10643)). Unfortunately this means you must install all ESLint plugins as dependencies within your project.

### I do not require all the enabled features (es2018, jest, etc)

Many ESLint features have been enabled to reduce the need for any additional configuration within projects extending this ESLint config.

This may come at a very small speed penalty. If this becomes a problem, you can disable the features within `eslintrc.js`.

### Why use Prettier? Why not just use ESLint alone?

1. ESLint will complain your line is too long, but Prettier will format your code and fix it.
1. Prettier will automatically format other files too (CSS, SCS, Markdown, JSON, YAML, etc).

## Roadmap

- Check [awesome-eslint](https://github.com/dustinspecker/awesome-eslint) for ideas

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Maintaining

See [MAINTAINING.md](MAINTAINING.md).

## Author

[Matt Turnbull](https://iamturns.com) <[matt@iamturns.com](mailto:matt@iamturns.com)>

## License

Open source software [licensed as MIT](https://github.com/iamturns/eslint-config-iamturns/blob/master/LICENSE).
