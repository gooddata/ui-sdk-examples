const path = require('path');
const Uglify = require("uglifyjs-webpack-plugin");

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
    ]
}
