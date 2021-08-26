const path = require('path');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./src/main.js"),
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    // 静态文件根目录
    contentBase: path.join(__dirname, "./www"),
    // 不压缩
    compress: false,
    port: 8080,
    // 虚拟打包的路径，bundle.js没有真正的生成
    publicPath: "/xuni/"
  }
}