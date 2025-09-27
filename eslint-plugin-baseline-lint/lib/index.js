const noNonBaselineCSS = require('./rules/no-non-baseline-css');
const noNonBaselineJS = require('./rules/no-non-baseline-js');
const noNonBaselineHTML = require('./rules/no-non-baseline-html');

module.exports = {
  configs: {
    recommended: {
      plugins: ['baseline-lint'],
      rules: {
        'baseline-lint/no-non-baseline-css': 'warn',
        'baseline-lint/no-non-baseline-js': 'warn',
        'baseline-lint/no-non-baseline-html': 'warn'
      }
    },
    strict: {
      plugins: ['baseline-lint'],
      rules: {
        'baseline-lint/no-non-baseline-css': 'error',
        'baseline-lint/no-non-baseline-js': 'error',
        'baseline-lint/no-non-baseline-html': 'error'
      }
    }
  },
  rules: {
    'no-non-baseline-css': noNonBaselineCSS,
    'no-non-baseline-js': noNonBaselineJS,
    'no-non-baseline-html': noNonBaselineHTML
  }
};
