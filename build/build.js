const webpack = require('webpack');
const prodicConfi = require('./webpack.prod');

webpack(prodicConfi, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.error(err);
        return;
    }

    console.log(stats.toString({
        chunks: false,
        colors: true
    }));
});