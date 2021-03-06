const path = require('path');
// const myLoader = require('./myLoader');
const webpack = require('webpack');
const childProcess = require('child_process');

const dotenv = require('dotenv');
dotenv.config();


module.exports = {
  mode : 'development',
  entry: {
    main : path.resolve('./src/app.js')
  },
  output: {
    publicPath: '/dist/',
    filename: '[name].js', //[name]으로 하면 자동으로 파일명을 읽어줌
    path: path.resolve('./dist')
  },
  module: {
    rules: [
      // {
      //   //test 로더가 처리해야 할 타겟
      //   //'/\.js.$/' .js를 가진 모든 파일
      //   test:/\.js$/,
      //   use: [
      //     path.resolve('./myLoader.js')
      //   ]
      // },
      {
        test: /\.css$/,
        use: [
          //loader는 아래서 부터 적용이되어서 css-loader를 마지막에 작성
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset',

        parser: {
          dataUrlCondition: {
          maxSize: 200 * 1024 // 1kb가 1024byte 이기 때문에 20kb를 원한다면 1024에 20을 곱합니다.
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
        banner: `
            Commit version : ${childProcess.execSync('git rev-parse --short HEAD')}
            Committer name : ${childProcess.execSync('git config user.name')}
            Commit Date : ${new Date().toLocaleString()}
        `
    }),
    new webpack.DefinePlugin({
      dev: JSON.stringify(process.env.DEV_API),
      pro: JSON.stringify(process.env.PRO_API)
  })
]
}