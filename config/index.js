var path = require('path');
module.exports = {
    dev: {
        env: {
            NODE_ENV: '"development"'
        },
        port: 8001,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        context: [
            '/shopping',
            '/v1',
            '/v2'
        ],
        proxyPath: 'http://cangdu.org:8001',
        cssSourceMap: false
    }
}