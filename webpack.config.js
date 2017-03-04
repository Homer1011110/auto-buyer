import * as path from "path"

let config = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
}

console.log(__dirname)

export = config
