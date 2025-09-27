const { RuleTester } = require('eslint');
const rule = require('../../lib/rules/no-non-baseline-html');

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2021, sourceType: 'module', ecmaFeatures: { jsx: true } }
});

ruleTester.run('no-non-baseline-html', rule, {
  valid: [
    { code: 'function C(){ return <div>ok</div>; }' }
  ],
  invalid: [
    {
      code: 'function Modal(){ return <dialog open>Modal</dialog>; }',
      errors: [{ messageId: 'nonBaselineFeature' }]
    },
    {
      code: 'function Img(){ return <img loading="lazy" />; }',
      errors: [{ messageId: 'nonBaselineFeature' }]
    }
  ]
});
