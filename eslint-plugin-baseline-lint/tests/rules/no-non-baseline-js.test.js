const { RuleTester } = require('eslint');
const rule = require('../../lib/rules/no-non-baseline-js');

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2021, sourceType: 'module' }
});

ruleTester.run('no-non-baseline-js', rule, {
  valid: [
    {
      code: 'console.log("Hello world");'
    },
    {
      code: 'Array.prototype.includes.call([1,2], 1);' // Stable feature
    }
  ],
  invalid: [
    {
      code: 'document.adoptedStyleSheets = [];',
      errors: [{ messageId: 'nonBaselineFeature' }]
    },
    {
      code: 'new IntersectionObserver(() => {});',
      errors: [{ messageId: 'nonBaselineFeature' }]
    }
  ]
});
