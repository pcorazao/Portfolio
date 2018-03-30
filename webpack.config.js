/*
    ./webpack.config.js
*/
const path = require('path');
const env = process.env.NODE_ENV;
const dist = path.resolve('dist');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
});
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CleanWebpackPluginConfig = new CleanWebpackPlugin([dist]);

var webpackPlugins = [CleanWebpackPluginConfig,HtmlWebpackPluginConfig];
if(env ==='development')
{
  const HotModuleReplacementPluginConfig = new webpack.HotModuleReplacementPlugin();
  const NoEmitOnErrorsPluginConfig = new webpack.NoEmitOnErrorsPlugin();
  const LiveReloadNotifyPlugin = require('live-reload-notify-webpack-plugin');
  const LiveReloadNotifyPluginConfig = new LiveReloadNotifyPlugin({
    ignoreFirstRun: true,
    logFn: console.log
  });

  webpackPlugins.push(HotModuleReplacementPluginConfig);
  webpackPlugins.push(NoEmitOnErrorsPluginConfig);
  webpackPlugins.push(LiveReloadNotifyPluginConfig);
}

module.exports = {
  entry: './app/index.js',
  output: {
    path: dist,
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: webpackPlugins,
  mode: env || 'production'
};