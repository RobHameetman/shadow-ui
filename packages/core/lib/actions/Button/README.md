![@shadow-ui/button][header]

![Version](https://img.shields.io/npm/v/@shadow-ui/button)
![Downloads](https://img.shields.io/npm/dt/@shadow-ui/button)
![Build](https://img.shields.io/bitbucket/pipelines/@shadow-ui/button/master)
![License](https://img.shields.io/npm/l/@shadow-ui/button)

# 📦 @shadow-ui/button

A base component for creating ShadowUI buttons.

- [📦 @shadow-ui/button](#%f0%9f%93%a6-shadow-uibutton)
  - [💼 Getting Started](#%f0%9f%92%bc-getting-started)
    - [📚 Prerequisites](#%f0%9f%93%9a-prerequisites)
    - [📲 Installing](#%f0%9f%93%b2-installing)
  - [🛥 Deployment](#%f0%9f%9b%a5-deployment)
  - [🧾 Important Dependencies](#%f0%9f%a7%be-important-dependencies)
  - [🙌🏼 Contributing](#%f0%9f%99%8c%f0%9f%8f%bc-contributing)
  - [🏷 Versioning](#%f0%9f%8f%b7-versioning)
  - [📜 Authors](#%f0%9f%93%9c-authors)
  - [📄 License](#%f0%9f%93%84-license)
  - [📯 Acknowledgments](#%f0%9f%93%af-acknowledgments)

## 💼 Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See deployment for notes on
how to deploy the project to NPM.

### 📚 Prerequisites

- Node v10.0.x+
- NPM v6.0.x+

```
nvm install v10.0.0
nvm use v10.0.0
```

### 📲 Installing

To install the project, clone and build the repo, then use `npm` to install
dependencies:

```bash
git clone git@github.com:RobHameetman/shadow-ui.git
cd shadow-ui/packages/core/lib/actions/Button
npm i
```

## 🛥 Deployment

To push changes to production, update the package version and publish to NPM:

```bash
git version patch
npm publish
```

## 🧾 Important Dependencies

- [TypeScript](https://www.typescriptlang.org/) - Implementation language
- [NPM](https://www.npmjs.com/) - Dependency Management
- [Webpack](https://webpack.js.org/) - The build pipeline used
- [Babel](https://babeljs.io/) - JavaScript/TypeScript transpiler

## 🙌🏼 Contributing

Please read [CONTRIBUTING.md](/CONTRIBUTING.md) for details on our code of
conduct, and the process for submitting pull requests to us.

## 🏷 Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available,
see the [tags on this repository](https://github.com/RobHameetman/shadow-ui/tags).

## 📜 Authors

- **Robert Hameetman** - _<rob@robhameetman.com>_

See also the list of [contributors](https://github.com/RobHameetman/shadow-ui/graphs/contributors)
who participated in this project.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md)
file for details.

## 📯 Acknowledgments

- Thank you to the amazing work of the Open WC project for guiding us on the path!

[header]: /.bitbucket/readme-core-button.png "@shadow-ui/button"
