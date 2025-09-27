const baselineChecker = require('../utils/baseline-checker');
const { CSS_FEATURE_MAP } = require('../utils/feature-mappings');

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Warn about CSS features that are not Baseline-stable',
      category: 'Best Practices',
      recommended: true
    },
    messages: {
      nonBaselineFeature: 'This CSS feature is not Baseline-stable yet — may not work in all browsers.'
    },
    schema: [] // no options currently
  },
  create(context) {
    return {
      Property(node) {
        const key = node.key.name || (node.key.value);
        if (key && CSS_FEATURE_MAP[key]) {
          const statusInfo = baselineChecker.checkFeatureStatus(CSS_FEATURE_MAP[key]);
          if (!statusInfo.isBaseline) {
            context.report({
              node,
              messageId: 'nonBaselineFeature',
              data: { feature: key }
            });
          }
        }
      },
      // For CSS selectors in template literals (optionally extend)
    };
  }
};
