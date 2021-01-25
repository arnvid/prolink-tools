import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import webpack from 'webpack';
import merge from 'webpack-merge';

import {baseConfig} from './webpack.config.base';

const config: webpack.Configuration = merge(baseConfig, {
  target: 'electron-main',
  entry: {
    main: './src/main/main.ts',
  },
  externals: {
    'better-sqlite3': 'commonjs better-sqlite3',
  },
  plugins: [
    new webpack.DefinePlugin({'process.type': '"browser"'}),
    new ForkTsCheckerWebpackPlugin({
      issue: {include: [{file: 'src/main/**/*'}, {file: 'src/shared/**/*'}]},
    }),
  ],
});

export default config;
