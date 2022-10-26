/**
 * @see https://www.npmjs.com/package/eslint-plugin-n
 */
module.exports = {
  extends: ["@yomukizrj/eslint-basic"],
  plugins: ["n"],
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".mjs"] },
    },
  },
  rules: {
    "n/handle-callback-err": ["error", "^(err|error)$"],
    "n/no-callback-literal": "off",
    "n/no-deprecated-api": "error",
    "n/no-exports-assign": "error",
    "n/no-new-require": "error",
    "n/no-path-concat": "error",
    "n/process-exit-as-throw": "error",
  },
};
