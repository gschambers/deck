var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlPlugin = require("html-webpack-plugin");

var env = process.env.NODE_ENV || "development";

var plugins = [
    new HtmlPlugin({
        title: "deck",
        template: "src/index.html",
        env: {}
    }),

    new webpack.optimize.CommonsChunkPlugin(
        "vendor",
        "vendor.js"
    ),

    new ExtractTextPlugin("style.css", {
        allChunks: true
    }),

    new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(env)
    })
];

if (env === "production") {
    plugins.push(
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );
}

module.exports = {
    entry: {
        index: "./src/index.js",
        style: "./src/index.scss",
        vendor: [
            "babel/polyfill",
            "immutable",
            "react",
            "router-rx",
            "rx"
        ]
    },

    output: {
        filename: "[name].js",
        path: path.resolve("dist/")
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel?optional[]=es7.classProperties&optional[]=es7.decorators"
            },

            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("css!sass")
            },

            {
                test: /\.jpg$/,
                loader: "url?mimetype=image/jpg&limit=10000"
            },

            {
                test: /\.png$/,
                loader: "url?mimetype=image/png&limit=10000"
            }
        ]
    },

    plugins: plugins,

    devtool: env === "production" ? "source-map" : "eval"
};
