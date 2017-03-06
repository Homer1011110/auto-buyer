// webpack will wrap these code as a CMD module
// so, dont't use es6's import&export features here
const path = require("path")
const copyWebpackPlugin = require("copy-webpack-plugin")

const soureDir = "./src"

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
