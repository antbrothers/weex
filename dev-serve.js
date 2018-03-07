/**
 * Created by linjianxi on 2017/8/17.
 */
var express          = require('express'),
  app              = express(),
  webpack          = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  webpackConfig    = require('./build/webpack.web.config');

// Serve index page
app.get('*', function ( req, res ) {
  res.sendFile(__dirname + '/index.html');
});

webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

webpackConfig.entry.main = webpackConfig.entry.app.concat([
  'webpack-dev-server/client?http://localhost:9090',
  'webpack/hot/only-dev-server'
])

var webpackServer = new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
});

webpackServer.listen(9090, 'localhost', function ( err ) {
  if ( err ) { console.log(err); }
});

var server = app.listen(8282, function () {
  var host = 'localhost';
  var port = server.address().port;

  console.log('React server listening at http://%s:%s', host, port);
});