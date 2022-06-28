const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path : path.resolve(__dirname, 'dist'),
        filename : 'budle.js'
    },
    resolve: {
        extensions : ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                text: /\.(js|jsx)$/,//elementos que vamos a trabajar
                exclude : /node_modules/,//no lea node_modules
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test : /\.html$/,
                use: {
                    loader : 'html-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}