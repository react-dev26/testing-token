import merge from 'webpack-merge';

import parts from './parts';

module.exports = function development() {
  return merge([
    {
      entry: {
        app: [
          'react-hot-loader/patch',
          'webpack-hot-middleware/client',
        ],

      },
    },
    parts.shared(),
    parts.images(),
    {
      devtool: 'eval-source-map',
    },
    parts.devServer({
      host: process.env.HOST,
      port: parseInt(process.env.PORT, 10),
    }),
  ]);
};
