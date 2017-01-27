/**
 * webpack.config.js
 * Author: Barbara Goss
 * Created: 2017-01-26
 */

module.exports = {
    entry: "./entry.js",
    output: {
        path: "dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: [
                        "react",
                        "es2015"
                    ]
                }
            }
        ]
    }
};