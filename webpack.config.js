// webpack will wrap these code as a CMD module
// so, dont't use es6's import&export features here
const path = require("path")
const fs = require("fs")
const copyWebpackPlugin = require("copy-webpack-plugin")

const soureDir = "./src"

function GenerateVersionPlugin(options) {
  // setup the plugin instance with options
}
GenerateVersionPlugin.prototype.generateVersion = function() {
  let version = Math.floor(Math.random()*65536)
  for(let i = 0; i < 3; i++) {
    version = version + "." + Math.floor(Math.random()*65536)
  }
  return version
}
GenerateVersionPlugin.prototype.apply = function(compiler) {
  let self = this
  compiler.plugin("emit", function(compilation, callback) {
    let filePath = path.join(__dirname, "src/manifest.json")
    fs.readFile(filePath, {encoding: "utf-8"}, function(err, data) {
      if(err) {
        throw err
      }
      let extensionManifest = JSON.parse(data)
      extensionManifest.version = self.generateVersion()
      console.log(extensionManifest.version)
      compilation.assets["manifest.json"] = {
        source: function() {
          return JSON.stringify(extensionManifest)
        },
        size: function() {
          return JSON.stringify(extensionManifest).length
        }
      }
      callback()
    })
  })
}

const config = {
  watch: true,
  entry: {
    background: soureDir + "/background_scripts/index.js",
    content: soureDir + "/content_scripts/index.js",
    popup: soureDir + "/popup/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        }
      }
    ]
  },
  plugins: [
    new copyWebpackPlugin([
      {from: "./src/manifest.json", to: "manifest.json"},
      {from: "./src/imgs", to: "imgs"},
      {from: "./src/popup/index.html", to: "popup.html"},
      {from: "./src/popup/index.css", to: "popup.css"},
      {from: "./src/content_scripts/index.css", to: "content.css"}
    ], {
      copyUnmodified: true
    })
  ]
}

module.exports = config
