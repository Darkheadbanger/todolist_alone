const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    app: path.join(__dirname, "src/index.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        type: "asset/ressource",
        generator: {
          //publicPath: '../fonts/',
          filename: "compiled/fonts/[hash][ext][query]",
        },
      },
    ], 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/index.html"),
    }),
  ],
  stats: "minimal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    open: false,
    static: path.resolve(__dirname, "./dist"),
    port: 3000,
  },
};
// entries