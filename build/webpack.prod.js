
const merge = require('webpack-merge');
const path = require('path');
const base = require('./webpack.base');

module.exports = merge(base, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: []
    }
})