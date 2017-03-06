const path = require("path")
const copyWebpackPlugin = require("copy-webpack-plugin")

const soureDir = "./src"

const config = {
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
      {from: "./src/manifest.json", to: "manifest.json"}
    ], {
      copyUnmodified: true
    })
  ]
}

module.exports = config
