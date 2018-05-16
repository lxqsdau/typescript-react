let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = function (config, webpack) {
  config.externals = [
    {
      lodash: 'window._',
    },
  ];
  // config.plugins = [new BundleAnalyzerPlugin()]
  config.resolve.extensions.push('.ts', '.tsx')
  // return config;
  };
  