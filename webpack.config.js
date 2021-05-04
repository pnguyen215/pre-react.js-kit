const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        port: 3082,
        contentBase: "./build",
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        },
        {
            test: /\.(less|css|scss)$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader',
            ],
        },
        {
            test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: "[path][name]-[hash:8].[ext]"
                }
            }]
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};