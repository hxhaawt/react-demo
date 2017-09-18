var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  // entry: './src/index.js',
  entry:{
      build: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, 
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, 
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }]
  },

  // plugins: [
  //         new htmlWebpackPlugin({
  //             // html源文件 + build.js文件生成 build.html文件
  //             // 输出的文件名称 默认index.html 可以带有子目录
  //             // filename: './item/build.html',
  //             filename: 'build.html',
  //             // 源文件
  //             template: 'index.html',
  //             // 注入资源在 head部分，不写就是在body部分
  //             // 加入js文件 
  //             //inject: true,
  //             // inject:'head',
  //             title:'hello react',
  //             chunks:['build'],//指定chunks 为 build 的js
  //         })
  // ],

  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
    
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}