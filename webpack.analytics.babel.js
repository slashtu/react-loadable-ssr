import merge from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import config from './webpack.client.babel';

module.exports = merge(config, {
  plugins: [new BundleAnalyzerPlugin()]
});
