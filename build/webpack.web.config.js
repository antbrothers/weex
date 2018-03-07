/**
 * Created by linjianxi on 2017/8/17.
 */
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
  entry: {
    // 'app': path.resolve('app', 'app.js')
    app: [
      path.resolve('app', 'app.js')
    ]
  },
  output: {
    path: 'dist/account',
    filename: '[name].js',
    publicPath: 'dist/account/',
  },
  node: {
    global: true
  },
  module: {
    loaders: [
      {
        test: /\.vue(\?[^?]+)?$/,
        loaders: ['vue']
      },
      {
        test:/\.js(\?[^?]+)?$/,
        loader: 'babel',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader?limit=102400',
      }
    ]
  }
  /*plugins:[
    new webpack.HotModuleReplacementPlugin() //热加载
  ]*/
};