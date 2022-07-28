const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "style", to: "style" },
                { from: "logo.ico", to: "logo.ico" },
                { from: "logo.png", to: "logo.png" },
                { from: "manifest.json", to: "manifest.json" },
            ],
        }),
    ],
    output: {
        filename: 'bundle.js',
        clean: true,
        publicPath: "/2048/",
    },
});