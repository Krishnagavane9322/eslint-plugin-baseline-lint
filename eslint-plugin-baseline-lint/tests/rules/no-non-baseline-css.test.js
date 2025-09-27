const { RuleTester } = require('eslint');
const rule = require('../../lib/rules/no-non-baseline-css');

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2021, sourceType: 'module' }
});

ruleTester.run('no-non-baseline-css', rule, {
  valid: [
    { code: 'const style = { color: "red" }' }
  ],
  invalid: [
    {
      code: 'const style = { ":has": "some-value" }',
      errors: [{ messageId: 'nonBaselineFeature' }]
    }
  ]
});
