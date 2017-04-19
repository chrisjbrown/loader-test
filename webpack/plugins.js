const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');

// plugins used in dev and prod
const basePlugins = [
  new webpack.DefinePlugin({
    __ENV__: JSON.stringify(process.env.DBK_ENV || 'PROD'),
    __TEST__: JSON.stringify(process.env.TEST),
  }),
  new HtmlWebpackPlugin({
    template: 'index.html',
    inject: 'body',
  }),
];

// dev only plugins
const devPlugins = [
  new webpack.NamedModulesPlugin(),
  new StyleLintPlugin({
    configFile: './.stylelintrc',
    files: ['./**/*.css'],
    failOnError: false,
  }),
];

// prod only plugins
const prodPlugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: ({ resource }) => /node_modules/.test(resource),
  }),
  new BabiliPlugin(),
  new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /nl/),
];

// export plugins depending on environment mode dev or prod
module.exports = basePlugins
.concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
.concat(process.env.NODE_ENV === 'development' ? devPlugins : []);
