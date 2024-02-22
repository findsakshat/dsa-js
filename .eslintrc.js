module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    // Basic Stylistic Rules
    'indent': ['error', 2],        // Use 2 spaces for indentation
    'quotes': ['error', 'single'], // Use single quotes
    'semi': ['error', 'always'],   // Require semicolons at the end of statements
    'comma-dangle': ['error', 'always-multiline'], // Require trailing commas in multiline object literals

    // Best Practices
    'eqeqeq': 'error',             // Require === and !==
    'no-console': 'warn',          // Warn about console.log and similar statements
    'no-eval': 'error',            // Avoid using eval()

    // Variables
    'no-unused-vars': 'error',     // Disallow unused variables
    'no-undef': 'error',           // Disallow the use of undeclared variables

    // Functions
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }], // Use function declarations or arrow functions, but not expressions
    'arrow-parens': ['error', 'always'], // Require parentheses around arrow function parameters

    // ES6+ Features
    'prefer-const': 'error',       // Use const for variables that don't need to be reassigned
    'prefer-arrow-callback': 'error', // Use arrow functions for callbacks
    'template-curly-spacing': ['error', 'always'], // Enforce consistent spacing inside template literals
  }
}
