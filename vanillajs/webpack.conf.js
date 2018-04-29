const path = require('path');
const Uglify = require("uglifyjs-webpack-plugin");
const proxyTarget = 'https://whitelabeling.gooddata.com/';

module.exports = {
    entry: './create-bundle/vanilla.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'gooddata_react_components_bundle.js',
        library: 'GDRC',
        libraryTarget: 'window'
    },
    plugins: [
        new Uglify(),
    ],
    devServer: {
        contentBase: path.join(__dirname, "demo"),
        port: 3000,
        https: true,
        proxy: {
            '/gdc': {
                cookieDomainRewrite: "localhost",
                target: proxyTarget,
                secure: false,
                changeOrigin: true,
                onProxyReq: proxyReq => {
                    // Browers may send Origin headers even with same-origin
                    // requests. To prevent CORS issues, we have to change
                    // the Origin to match the target URL.
                    if (proxyReq.getHeader('origin')) {
                        proxyReq.setHeader('origin', proxyTarget);
                    }
                }
            },
        }
    }
}
