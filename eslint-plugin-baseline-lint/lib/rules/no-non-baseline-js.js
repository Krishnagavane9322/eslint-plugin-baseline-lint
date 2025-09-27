const baselineChecker = require('../utils/baseline-checker');
const { JS_FEATURE_MAP } = require('../utils/feature-mappings');

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Warn about JavaScript APIs that are not Baseline-stable',
      category: 'Best Practices',
      recommended: true
    },
    messages: {
      nonBaselineFeature: 'This JavaScript feature is not Baseline-stable yet — may not work in all browsers.'
    },
    schema: []
  },
  create(context) {
    return {
      MemberExpression(node) {
        const objectName = node.object.name;
        const propertyName = node.property.name;
        const fullName = objectName && propertyName ? `${objectName}.${propertyName}` : null;

        if (propertyName && JS_FEATURE_MAP[propertyName]) {
          const statusInfo = baselineChecker.checkFeatureStatus(JS_FEATURE_MAP[propertyName]);
          if (!statusInfo.isBaseline) {
            context.report({
              node,
              messageId: 'nonBaselineFeature'
            });
          }
        } else if (fullName && JS_FEATURE_MAP[fullName]) {
          const statusInfo = baselineChecker.checkFeatureStatus(JS_FEATURE_MAP[fullName]);
          if (!statusInfo.isBaseline) {
            context.report({
              node,
              messageId: 'nonBaselineFeature'
            });
          }
        }
      },
      NewExpression(node) {
        if (node.callee && node.callee.name && JS_FEATURE_MAP[node.callee.name]) {
          const statusInfo = baselineChecker.checkFeatureStatus(JS_FEATURE_MAP[node.callee.name]);
          if (!statusInfo.isBaseline) {
            context.report({
              node,
              messageId: 'nonBaselineFeature'
            });
          }
        }
      }
    };
  }
};
