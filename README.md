# eslint-config-iamturns

> ESLint rules for my projects.

Combination of [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for linting, and [Prettier](https://prettier.io) for automatic code formatting.

Supports modern JavaScript: es2018, modules, jsx, jest, etc.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
  - [Prettier](#prettier)
- [FAQ](#faq)
  - [I do not require all the enabled features (es2018, jest, etc)](#i-do-not-require-all-the-enabled-features-es2018-jest-etc)
  - [Why use Prettier? Why not just use ESLint alone?](#why-use-prettier-why-not-just-use-eslint-alone)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Maintaining](#maintaining)
- [Author](#author)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm](https://www.npmjs.com/) which is bundled with [node](https://nodejs.org).

```bash
npm install eslint-config-iamturns --save-dev
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

## FAQ

### I do not require all the enabled features (es2018, jest, etc)

Many ESLint features have been enabled to reduce the need for any additional configuration within projects extending this ESLint config.

This may come at a very small speed penalty. If this becomes a problem, you can disable the features within your `eslintrc.js`.

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
