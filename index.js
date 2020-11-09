module.exports = {
  extends: ["eslint:recommended", "google"],
  rules: {
    "quotes": ["error", "double", { allowTemplateLiterals: true }],
    "object-curly-spacing": "off",
    "no-undef": "off",
  },
};
