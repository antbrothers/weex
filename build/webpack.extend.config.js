require('webpack');

module.exports ={
    entry: {
      'weex':'./extend/index.js'
    },
    output: {
      path: 'dist/account/',
      filename:"[name].bundle.js"
    },
    module: {
      loaders: [
          {
              test: /\.js(\?[^?]+)?$/,
              loader: 'babel'
          }, {
              test: /\.vue(\?[^?]+)?$/,
              loaders: ['vue']
          }
      ]
    }
};
