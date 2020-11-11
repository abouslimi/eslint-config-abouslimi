module.exports = {
  extends: ["eslint:recommended", "google"],
  rules: {
    "quotes": ["error", "double", { allowTemplateLiterals: true }],
    "semi": [
      "error",
      "always",
    ],
    "require-jsdoc": ["error", {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
      },
    }],
    "no-undef": "off",
    "no-new": "off",
    "no-new-object": "error",
    "new-cap": "off",
    "object-curly-spacing": "off",
    "no-invalid-this": "off",
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "no-restricted-syntax": "off",
    "no-async-promise-executor": "off",
    "no-await-in-loop": "off",
    "no-return-await": "off",
    "max-len": ["error", {
      code: 120,
      tabWidth: 2,
      ignoreUrls: true,
    }],
  },
};
