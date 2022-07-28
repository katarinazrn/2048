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
                { from: "logo.png", to: "logo.png" },
            ],
            patterns: [
                { from: "logo.png", to: "logo.png" },
            ],
        }),
    ],
    output: {
        filename: 'bundle.js',
        clean: true,
        publicPath: "/2048/",
    },
});