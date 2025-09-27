// Mapping CSS features to BCD keys
const CSS_FEATURE_MAP = {
  ':has': 'css.selectors.has',
  'container-query-length': 'css.properties.container-query-length',
  'container-query-inline-size': 'css.properties.container-query-inline-size',
  'backdrop-filter': 'css.properties.backdrop-filter',
  'scroll-timeline': 'css.properties.scroll-timeline',
  '@container': 'css.at-rules.container',
  '@layer': 'css.at-rules.layer',
  'subgrid': 'css.properties.grid-template-columns.subgrid'
};

// Mapping JS API features to BCD keys
const JS_FEATURE_MAP = {
  'adoptedStyleSheets': 'api.Document.adoptedStyleSheets',
  'requestIdleCallback': 'api.Window.requestIdleCallback',
  'IntersectionObserver': 'api.IntersectionObserver',
  'ResizeObserver': 'api.ResizeObserver',
  'PerformanceObserver': 'api.PerformanceObserver',
  'BroadcastChannel': 'api.BroadcastChannel',
  'SharedArrayBuffer': 'javascript.builtins.SharedArrayBuffer',
  'WeakRef': 'javascript.builtins.WeakRef',
  'FinalizationRegistry': 'javascript.builtins.FinalizationRegistry',
  'Array.prototype.at': 'javascript.builtins.Array.at',
  'Object.hasOwn': 'javascript.builtins.Object.hasOwn',
  'Object.fromEntries': 'javascript.builtins.Object.fromEntries'
};

// Mapping HTML elements and attributes to BCD keys
const HTML_FEATURE_MAP = {
  'dialog': 'html.elements.dialog',
  'details': 'html.elements.details',
  'summary': 'html.elements.summary',
  'slot': 'html.elements.slot',
  'template': 'html.elements.template',
  'img[loading]': 'html.elements.img.loading',
  'img[decoding]': 'html.elements.img.decoding'
};

module.exports = {
  CSS_FEATURE_MAP,
  JS_FEATURE_MAP,
  HTML_FEATURE_MAP
};
