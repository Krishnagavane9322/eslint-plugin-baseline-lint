module.exports = {
  plugins: ['baseline-lint'],
  rules: {
    'baseline-lint/no-non-baseline-css': 'warn',
    'baseline-lint/no-non-baseline-js': 'warn',
    'baseline-lint/no-non-baseline-html': 'warn'
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  env: {
    browser: true,
    es2021: true
  }
};
