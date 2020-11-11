module.exports = {
  extends: ["eslint:recommended", "google"],
  rules: {
    "quotes": ["error", "double", { allowTemplateLiterals: true }],
    "semi": [
      "error",
      "always",
    ],
    "no-undef": "off",
    "no-new": "off",
    "no-new-object": "error",
    "object-curly-spacing": "off",
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "no-restricted-syntax": "off",
    "no-async-promise-executor": "off",
    "no-await-in-loop": "off",
    "no-return-await": "off",
  },
};
