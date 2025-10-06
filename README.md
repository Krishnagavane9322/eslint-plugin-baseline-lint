# Baseline Lint - ESLint Plugin

[![npm version](https://badge.fury.io/js/eslint-plugin-baseline-lint.svg)](https://badge.fury.io/js/eslint-plugin-baseline-lint)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

🚀 **Catch browser compatibility issues before they become bugs!**

Baseline Lint is an innovative ESLint plugin that helps developers identify unstable CSS, JavaScript, and HTML features based on Google's Baseline compatibility standards. Built to ensure your web applications work reliably across all major browsers.

## 🌟 Features

- ✅ **Multi-language Support**: Checks CSS properties, JavaScript APIs, and HTML elements in one unified tool
- ✅ **Google Baseline Integration**: Uses real-time compatibility data from Google's Baseline initiative  
- ✅ **Real-time Warnings**: Get instant feedback in your IDE as you code
- ✅ **Zero Configuration**: Works out of the box with sensible defaults
- ✅ **Seamless Integration**: Plugs into existing ESLint workflows effortlessly
- ✅ **Comprehensive Coverage**: Detects unstable features across the entire web platform

## 🎯 Problem it Solves

Traditional linting tools focus on syntax and code quality but ignore browser compatibility. Developers often discover compatibility issues late in development or after deployment. Baseline Lint bridges this gap by providing early warnings about web features that may not work consistently across all browsers.

## 🚀 Quick Start

### Installation

npm install --save-dev eslint-plugin-baseline-lint

### Configuration

Add to your `.eslintrc.js`:

module.exports = {
plugins: ['baseline-lint'],
rules: {
'baseline-lint/no-non-baseline-css': 'warn',
'baseline-lint/no-non-baseline-js': 'warn',
'baseline-lint/no-non-baseline-html': 'warn'
}
};


Or in `.eslintrc.json`:

{
"plugins": ["baseline-lint"],
"rules": {
"baseline-lint/no-non-baseline-css": "warn",
"baseline-lint/no-non-baseline-js": "warn",
"baseline-lint/no-non-baseline-html": "warn"
}
}


### Usage

Once configured, Baseline Lint will automatically warn you about unstable web features:

// ⚠️ Warning: This CSS feature is not Baseline-stable yet
const styles = {
":has": "div > p",
"color": "red"
};

// ⚠️ Warning: This JavaScript API is not Baseline-stable yet
document.adoptedStyleSheets = [stylesheet];

// ⚠️ Warning: This HTML feature is not Baseline-stable yet
function Modal() {
return <dialog open>Modal content</dialog>;
}


## 📊 Example Warnings

### CSS Warnings
// ⚠️ Warning: This CSS feature ":has" is not Baseline-stable yet
const styles = { ":has": "div > p" };

// ⚠️ Warning: This CSS feature "container-type" is not Baseline-stable yet
const containerCSS = { "container-type": "inline-size" };


### JavaScript Warnings
// ⚠️ Warning: This JavaScript API is not Baseline-stable yet
document.adoptedStyleSheets = [stylesheet];

// ⚠️ Warning: This JavaScript API is not Baseline-stable yet
navigator.share({ title: 'Example' });


### HTML Warnings
// ⚠️ Warning: This HTML feature is not Baseline-stable yet
function Modal() {
return <dialog open>Modal content</dialog>;
}


## 🛠️ Supported Features

### CSS Properties & Selectors
- `:has()` pseudo-class selector
- `container-type` property
- `container-name` property
- `@layer` at-rule
- `accent-color` property
- `color-scheme` property
- And many more based on Google Baseline data

### JavaScript APIs
- `document.adoptedStyleSheets`
- `CSS.registerProperty()`
- `navigator.share()`
- `ResizeObserver` API
- `IntersectionObserver` API
- `Web Animations API`
- And many more based on Google Baseline data

### HTML Elements & Attributes
- `<dialog>` element
- `<details>` element  
- `<summary>` element
- `loading` attribute
- `inert` attribute
- `popover` attribute
- And many more based on Google Baseline data

## ⚙️ Configuration Options

### Rule Levels

{
"rules": {
"baseline-lint/no-non-baseline-css": "error", // Throw error
"baseline-lint/no-non-baseline-js": "warn", // Show warning
"baseline-lint/no-non-baseline-html": "off" // Disable rule
}
}


### Advanced Configuration

{
"rules": {
"baseline-lint/no-non-baseline-css": ["warn", {
"ignorePatterns": ["experimental-*"],
"allowUnstable": false
}]
}
}


## 🧪 Development & Testing

### Setup Development Environment

1. Clone the repository:
git clone https://github.com/Krishnagavane9322/eslint-plugin-baseline-lint.git
cd eslint-plugin-baseline-lint


2. Install dependencies:
npm install


3. Run tests:
npm test


4. Run linting:
npm run lint


### Running Tests

Run all tests
npm test

Run tests in watch mode
npm run test:watch

Run tests with coverage
npm test -- --coverage

Run linting
npm run lint

Fix linting issues
npm run lint:fix


### Test Examples

from test file


### Local Development with Test Project

1. Link the plugin locally:
npm link


2. Create a test project:
mkdir test-baseline-lint
cd test-baseline-lint
npm init -y
npm install --save-dev eslint
npm link eslint-plugin-baseline-lint


5. Run ESLint:
npx eslint test.js


## 🛠️ Technologies Used

- **JavaScript/Node.js**: Core plugin development
- **ESLint**: Plugin architecture and rule engine  
- **web-features**: Google Baseline compatibility data
- **Jest**: Testing framework
- **npm**: Package management



## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and add tests
4. **Run tests**: `npm test`
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Development Guidelines

- Write tests for new features
- Follow existing code style
- Update documentation as needed
- Ensure all tests pass
- Follow semantic versioning

## 🐛 Issues & Support

Found a bug or have a feature request?

- **Create an Issue**: [GitHub Issues](https://github.com/Krishnagavane9322/eslint-plugin-baseline-lint/issues)
- **Discussion**: [GitHub Discussions](https://github.com/Krishnagavane9322/eslint-plugin-baseline-lint/discussions)

## 📊 Compatibility

- **Node.js**: ≥14.0.0
- **ESLint**: ≥8.0.0
- **Browsers**: Works with all major browsers through compatibility warnings

## 🗺️ Roadmap

- [ ] **v1.1**: Enhanced CSS container query support
- [ ] **v1.2**: Custom baseline configuration options
- [ ] **v1.3**: Integration with popular bundlers (Webpack, Vite)
- [ ] **v2.0**: Visual Studio Code extension
- [ ] **v2.1**: GitHub Actions integration
- [ ] **v2.2**: Automatic fix suggestions

## 👥 Team

Built by:
- **Krushana** - Final-year CS student specializing in web development and AI
- **Kalyani** - Final-year CS student focusing on testing and user experience

## 🏆 Hackathon

This project was created for the **Google Chrome Baseline Tooling Hackathon 2025**.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Chrome Team** for organizing the Baseline Tooling Hackathon
- **Google Baseline Initiative** for providing comprehensive compatibility data
- **ESLint Team** for the excellent plugin architecture
- **Open Source Community** for inspiration and support

---

⭐ **If this plugin helped you catch compatibility issues, please give us a star!**

[Report Bug](https://github.com/Krishnagavane9322/eslint-plugin-baseline-lint/issues) • [Request Feature](https://github.com/Krishnagavane9322/eslint-plugin-baseline-lint/issues) • [Contribute](https://github.com/Krishnagavane9322/eslint-plugin-baseline-lint/blob/main/CONTRIBUTING.md)
