const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    // publicPath: '/container/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@https://micro-front-ends-ff68c-m.web.app/remoteEntry.js`,
        auth: `auth@https://micro-front-ends-ff68c-auth.web.app/remoteEntry.js`,
        dashboard: `dashboard@https://micro-front-ends-ff68c-dash.web.app/remoteEntry.js`
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
