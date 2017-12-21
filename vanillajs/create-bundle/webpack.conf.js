const path = require('path');
const Uglify = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: './vanilla.js',
    output: {
        path: path.resolve(__dirname, "dist"), // string
        filename: 'gooddata_react_components_bundle.js',
        library: 'GDRC',
        libraryTarget: 'window'
    },
    plugins: [
        new Uglify()
    ]
}
