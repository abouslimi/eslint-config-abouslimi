module.exports = {
  extends: ["eslint:recommended", "google"],
  rules: {
    "quotes": ["error", "double", { allowTemplateLiterals: true }],
    "no-async-promise-executor": "off",
    "no-return-await": "off",
    "object-curly-spacing": "off",
    "no-new-object": "error",
    "no-undef": "off",
  },
};
