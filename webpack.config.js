const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: "./src/main.js",
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js'
  },
  module: {
    rules: [
      {
      test: /\.(png|jpe?g|gif)$/i,
      use:["file-loader",
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
          },
          gifsicle: {
            interlaced: true,
          },
        }
      },
    ]
  },
      {
        test: /\.css$/, 
				use: ['style-loader', 'css-loader']
      },
      {
      test: /\.mp3$/,
      use: ["file-loader"]
      },
      {
      test: /\.(mov|mp4)$/,
      use: [
      {
        loader: 'file-loader',
        options: {
        name: '[name].[ext]'
        }  
      }
    ]
  },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "index.html")
    }),
  ]
};
