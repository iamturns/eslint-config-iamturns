# eslint-config-iamturns

> ESLint rules for my projects.

Includes [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with [React](https://reactjs.org/), [Prettier](https://prettier.io), [TypeScript](https://www.typescriptlang.org/) (optional), and [Jest](https://jestjs.io/).

See [create-exposed-app](https://github.com/iamturns/create-exposed-app) for example setup.

## Installation

This module is distributed via [npm](https://www.npmjs.com/) which is bundled with [Node.js](https://nodejs.org).

Install dependencies. ESLint plugins [must also be installed](https://github.com/eslint/eslint/issues/10125).

```bash
npm install eslint-config-iamturns \
            eslint-plugin-import@^2.14.0 \
            eslint-plugin-jsx-a11y@^6.1.1 \
            eslint-plugin-react@^7.11.0 \
            --save-dev
```

Within your ESLint config file:

```javascript
module.exports = {
  extends: ["iamturns"],
  rules: {},
}
```

### Typescript support

Install additional dependency:

```bash
npm install @typescript-eslint/eslint-plugin@^1.0.0 --save-dev
```

Within your ESLint config file:

```javascript
module.exports = {
  extends: ["iamturns/typescript"],
  rules: {},
}
```

## FAQ

### Why are so many features included and enabled by default? I'm not using Jest!

Including and enabling features reduces the need for any additional configuration within consumers.

This may come at a very small speed penalty. If this becomes a problem, you can disable the features within your `eslintrc.js`.

## Roadmap

- Check [awesome-eslint](https://github.com/dustinspecker/awesome-eslint) for ideas

## Additional Documentation

- [CHANGELOG.md](CHANGELOG.md)
- [DEVELOPING.md](DEVELOPING.md)
- [CONTRIBUTING.md](CONTRIBUTING.md)
- [MAINTAINING.md](MAINTAINING.md)

## Credits

Authored and maintained by Matt Turnbull ([iamturns.com](https://iamturns.com) / [@iamturns](https://twitter.com/iamturns))

To all [contributors](https://github.com/iamturns/eslint-config-iamturns/graphs/contributors) (if you exist) - thank you!

## License

Open source [licensed as MIT](https://github.com/iamturns/eslint-config-iamturns/blob/master/LICENSE).
