module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false, // So no Babel config file is needed
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['baseline-lint'],
  rules: {
    'baseline-lint/no-non-baseline-css': 'warn',
    'baseline-lint/no-non-baseline-js': 'warn',
    'baseline-lint/no-non-baseline-html': 'warn'
  },
  env: {
    browser: true,
    es2021: true
  }
};
