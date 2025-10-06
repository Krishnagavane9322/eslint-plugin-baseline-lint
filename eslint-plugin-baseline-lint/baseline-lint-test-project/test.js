// CSS usage example (CSS-in-JS style)
const style = {
  ':has': 'div > p', // unstable CSS selector
  color: 'red'
};

// JavaScript unstable API
document.adoptedStyleSheets = [];

// React JSX with unstable HTML element/attr
function Modal() {
  return <dialog open>Modal Contents</dialog>;
}
