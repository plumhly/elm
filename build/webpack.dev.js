
const merge = require('webpack-merge');
const path = require('path');
const base = require('./webpack.base');
const webpack = require('webpack');

module.exports = merge(base, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        open: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});