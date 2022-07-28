const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "style", to: "style" },
            ],
            patterns: [
                { from: "logo.ico", to: "logo.ico" },
            ],
            patterns: [
                { from: "logo.png", to: "logo.png" },
            ],
            patterns: [
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