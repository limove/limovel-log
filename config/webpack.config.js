let path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/components/index.tsx',
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(tsx?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {
        test: /\.less/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
    },
    mainFields: ['module', 'main']
  },
  externals: {
  },
}
