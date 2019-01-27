module.exports = {
  extends: [
    // airbnb-typescript config is optimised for TS, but will fallback to regular airbnb for JS files. Best to re-use existing airbnb-typescript dependency here.
    "eslint-config-airbnb-typescript",
    "eslint-config-prettier",
    "eslint-config-prettier/react",
  ].map(require.resolve),
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": "off",
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    "react/jsx-filename-extension": "off",
  },
}
