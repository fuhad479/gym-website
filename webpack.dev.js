const baseConfig = require('./webpack.config')
const { merge } = require('webpack-merge')

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        static: './src',
        port: 3000
    }
})
