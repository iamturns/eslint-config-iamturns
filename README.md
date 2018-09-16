# eslint-config-iamturns

ESLint rules for my projects.

Combination of [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for linting, and [Prettier](https://prettier.io) for automatic code formatting.

Supports modern JavaScript, enabling es2018, modules, node environment, browser environment, jsx, and jest.

This project assumes you are have ESLint and Prettier running together. See [generator-iamturns-js](https://github.com/iamturns/generator-iamturns-js) for example setup.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Setup](#setup)
- [FAQ](#faq)
  - [Why do I need to install so many dependencies?](#why-do-i-need-to-install-so-many-dependencies)
  - [I do not require all the enabled features (es2018, jest, etc)](#i-do-not-require-all-the-enabled-features-es2018-jest-etc)
  - [Why use Prettier? Why not just use ESLint alone?](#why-use-prettier-why-not-just-use-eslint-alone)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Maintaining](#maintaining)
- [Author](#author)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Setup

Install `eslint-config-iamturns` and required peer dependencies:

```bash
npx install-peerdeps --dev eslint-config-iamturns
```

Add `eslintrc.js` file:

```javascript
module.exports = {
  extends: ["iamturns"],
  rules: {},
}
```

## FAQ

### Why do I need to install so many dependencies?

ESLint will not load ESLint plugins relative to ESLint config files (see [eslint/eslint#10643](https://github.com/eslint/eslint/issues/10643)). Unfortunately this means you must install all ESLint plugins used within this config as dependencies to your project.

This is achieved automatically using the `npx install-peerdeps` command in installation.

If you are _not_ using React, you can safely uninstall these dependencies:

```bash
npm uninstall eslint-plugin-react eslint-plugin-jsx-a11y
```

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
