const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
    chainWebpack: config => {
        config.optimization.delete("splitChunks");
    },
    configureWebpack: config => {
        config.optimization = {
            splitChunks: {
                cacheGroups: {
                    common: {
                        //抽取所有入口页面都需要的公共chunk
                        name: "chunk-common",
                        chunks: "initial",
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 1,
                        reuseExistingChunk: true,
                        enforce: true
                    }
                }
            }
        }
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new CompressionPlugin({
                        algorithm: 'gzip',
                        test: /\.(js|css)$/,
                        threshold: 10240,
                        minRatio: 0.8,
                        deleteOriginalAssets: false
                    })
                ]
            }
        }
    },
    pages: {
        pc: {
            entry: 'src/pc/main.js',
            template: 'public/pc.html',
            filename: 'pc.html',
            chunks: ["pc", "chunk-common"],
            title: '论坛'
        },
        admin: {
            entry: 'src/admin/main.js',
            template: 'public/admin.html',
            filename: 'admin.html',
            chunks: ["admin", "chunk-common"],
            title: '管理后台'
        }
    },
    devServer: {
        index: 'pc.html',
        proxy: 'http://forum.zhangxu.com'
    },
}
