<h1 align="center">Easy Software Effort Estimation </h1>
This is static tool that allows a quick and informal approach of estimating how a web software project will take to complete.

<p align="center">
  <a href="https://github.com/claudiotx/software-effort-estimation">
    <img src="https://img.shields.io/maintenance/yes/2019.svg" alt="version" />
  </a>
  <a href="https://travis-ci.org/claudiotx/software-effort-estimation">
    <img src="https://img.shields.io/travis/claudiotx/software-effort-estimation.svg" alt="travis" />
  </a>
  <a href="https://github.com/claudiotx/software-effort-estimation">
    <img src="https://img.shields.io/github/downloads/claudiotx/software-effort-estimation/total.svg" alt="downloads" />
  </a>
  <a href="https://github.com/claudiotx/software-effort-estimation">
    <img src="https://img.shields.io/github/package-json/keywords/claudiotx/software-effort-estimation.svg" alt="keywords" />
  </a>
  <a href="https://github.com/claudiotx/software-effort-estimation">
    <img src="https://img.shields.io/github/issues/claudiotx/software-effort-estimation/bug.svg" alt="bugs" />
  </a>
  <a href="https://github.com/claudiotx/software-effort-estimation">
    <img src="https://img.shields.io/github/issues/claudiotx/software-effort-estimation/feature-request.svg" alt="feature request" />
  </a>
  <a href="https://github.com/claudiotx/software-effort-estimation">
    <img src="https://img.shields.io/github/issues/claudiotx/software-effort-estimation/issues.svg" alt="issues open" />
  </a>
</p>

The [`estimation static app`](https://estimation.coderecipes.org) website is generally available and deployed on my private Digital Ocean (via Docker).

<p align="center">
  <b>Lightweight, simple and user-friendly Card UI</b></br>
  <sub>Generate a Web Software Project time effort estimation in less than 30 secs.<sub>
</p>

* **Only 2 dependencies**: Just uses Tachyons CSS and React Function Components and Hooks
* **React Hooks**: Trivial State management is powered by React Hooks


## Install Locally

```sh
npm install
npm start
```

## R&D (for more formal classic appraches)
### Paramedic Model
Simplistic Model

```js
const NUM_OF_FUNCTIONS = 40;
const AVG_FUNCTIONS_PER_DAY = 10; // based on data from past projects

const effort = AVG_FUNCTIONS_PER_DAY;
const functionPoints = NUM_OF_FUNCTIONS;
const productivityRate = systemSize / effort;
const parametricEffort = functionPoints * productivityRate;
```

const ufp = numOfUsrInputs * numOfUsrOutputs

### 1. Function Points
Estimate system size

### 2. COCOMO (Constructive Cost Model)
Estimate effort
System Requirement => Algorithm => Estimate


## Automated Comments
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
