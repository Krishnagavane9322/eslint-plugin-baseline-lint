const baselineChecker = require('../utils/baseline-checker');
const { HTML_FEATURE_MAP } = require('../utils/feature-mappings');

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Warn about HTML elements and attributes that are not Baseline-stable',
      category: 'Best Practices',
      recommended: true
    },
    messages: {
      nonBaselineFeature: 'This HTML feature is not Baseline-stable yet — may not work in all browsers.'
    },
    schema: []
  },
  create(context) {
    return {
      // Example for React JSX:
      JSXOpeningElement(node) {
        const tagName = node.name.name;
        if (tagName && HTML_FEATURE_MAP[tagName]) {
          const statusInfo = baselineChecker.checkFeatureStatus(HTML_FEATURE_MAP[tagName]);
          if (!statusInfo.isBaseline) {
            context.report({
              node,
              messageId: 'nonBaselineFeature'
            });
          }
        }

        // Check attributes
        node.attributes.forEach(attr => {
          if (attr.type === 'JSXAttribute') {
            const attrName = attr.name.name;
            const selector = `${tagName.toLowerCase()}[${attrName}]`;
            if (HTML_FEATURE_MAP[selector]) {
              const statusInfo = baselineChecker.checkFeatureStatus(HTML_FEATURE_MAP[selector]);
              if (!statusInfo.isBaseline) {
                context.report({
                  node: attr,
                  messageId: 'nonBaselineFeature'
                });
              }
            }
          }
        });
      }
    };
  }
};
