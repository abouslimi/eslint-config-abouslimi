module.exports = {
  env: {
    es2021: true,
    jest: true,
    mocha: true,
    node: true
  },
  extends: ["airbnb-base", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": ["error", { singleQuote: false }],
    "no-new": "off",
    "no-restricted-syntax": "off",
    "class-methods-use-this": "off",
    "no-await-in-loop": "off",
    "no-async-promise-executor": "off",
    "no-underscore-dangle": "off",
    "no-console": [
      "error",
      {
        "allow": [
          "error",
          "log"
        ]
      }
    ],
  }
};
