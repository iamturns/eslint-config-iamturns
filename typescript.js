module.exports = {
  extends: [
    "./index",
    "@typescript-eslint/eslint-plugin/lib/configs/recommended",
    "eslint-config-prettier/@typescript-eslint",
  ].map(require.resolve),
}
