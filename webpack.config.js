"use strict";
var path = require('path');
var webpack = require("webpack");
var fs = require('fs')
require("babel-core/register");
require("babel-polyfill");
var OCRAD = require("ocradjs-browser.js");
module.exports = {
    context: __dirname + "/ChromePlugin",
    entry: {
      main : ['babel-polyfill',"./index.js"]
    },
    output: {
        filename: "[name].index.js",
        path: __dirname + '/Build'
    },
    module: {
        loaders: [
          {
              test: /\.js?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel', // 'babel-loader' is also a legal name to reference
              query: {
                  presets: ['es2015']
              }
          }
        ]
    },
   
    plugins: [
        //This will give global access to the following plugins. Accessable by their name (Eg. Joi)
        //requires npm install for each plugin.
        new webpack.ProvidePlugin({
           OCRAD : "ocradjs-browser.js"
        }),
        //Specific ignore for moment because we dont use it in the browser.
        new webpack.IgnorePlugin(/locale/, /moment$/)
    ]
};
