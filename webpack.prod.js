const baseConfig = require('./webpack.config')
const { merge } = require('webpack-merge')

module.exports = merge(baseConfig, {
    mode: 'production',
    output: {
        assetModuleFilename: 'static/[name].[ext]'
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    }
})
