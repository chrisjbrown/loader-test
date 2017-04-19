const production = process.env.NODE_ENV === 'production';
const { resolve } = require('path');
const pkg = require('../package.json');

// if in development, use eslint loader
const eslintloader = [];
if (!production) {
  eslintloader.push('eslint-loader');
}

/**
 * returns babel loader settings
 * @param {bool} common - transpile commonjs modules or not
 */
const babelSettings = function (common = false) {
  return {
    // https://github.com/babel/babel-loader#options
    cacheDirectory: !production,

    // https://babeljs.io/docs/usage/options/
    babelrc: false,
    presets: [
      // A Babel preset that can automatically determine the Babel plugins and polyfills
      // https://github.com/babel/babel-preset-env
      ['env', {
        targets: {
          browsers: pkg.browserslist,
        },
        modules: common ? 'commonjs' : false,
        useBuiltIns: false,
        debug: false,
      }],
      // Experimental ECMAScript proposals
      // https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-
      'stage-0',
      // JSX, Flow
      // https://github.com/babel/babel/tree/master/packages/babel-preset-react
      'react',
      // Optimize React code for the production build
      // https://github.com/thejameskyle/babel-react-optimize
      ...!production ? [] : ['react-optimize'],
    ],
    plugins: [
      'transform-react-inline-elements',
      'transform-react-constant-elements',
      'transform-decorators-legacy',
      // Adds component stack to warning messages
      // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-source
      // ...isDebug ? ['transform-react-jsx-source'] : [],
      // Adds __self attribute to JSX which React will use for some warnings
      // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-self
      // ...isDebug ? ['transform-react-jsx-self'] : [],
    ],
  };
};

exports.eslint = {
  test: /\.jsx?$/,
  enforce: 'pre',
  loader: eslintloader,
  exclude: /core_modules/,
};

// build css
exports.css = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader',
  ],
};

// transpile js w/ babel
exports.js = {
  test: /\.js?$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  options: babelSettings(false),
};

// image loader
exports.image = {
  test: /\.(png|jpg|jpeg|gif|svg)$/,
  loader: 'url-loader',
  options: { prefix: 'img', limit: 5000 },
};

// font loader
exports.font = {
  test: /\.(woff|woff2|ttf|eot)$/,
  loader: 'url-loader',
  options: { prefix: 'font', limit: 5000 },
};

