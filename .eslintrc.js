module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    // Basic Stylistic Rules
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars': 'error',

    // Best Practices
    'eqeqeq': 'error',
    'no-console': 'warn',
    'no-eval': 'error',

    // Variables
    'no-shadow': 'error',
    'no-var': 'error',
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],

    // Functions
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'arrow-parens': ['error', 'always'],

    // ES6+ Features
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'template-curly-spacing': ['error', 'always'],
  },
  overrides: [
    {
      files: ['src/**/*.js'], // Set the path for your JavaScript files in the src folder
      rules: {
        // Additional rules specific to files in the src folder
        // For example:
        'no-console': 'off',
      },
    },
  ],
};
