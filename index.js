mkdir new-project
cd new-project
npm init -y
npm i —-save-dev webpack webpack-cli
touch webpack.config.js .babelrc .tsconfig

open webpack.config.js

// within

module.exports = {
  entry: "index.js",
  output: {
    path: 
  },
  module: {
    rules: [
      test: \/.(tsx|ts)?$/,
      loader: "babel-loader"
    ]
  }
}


open .tsconfig

// within

{
  compilerOptions: {
    allowSynteticDefaultImports: true,
    jsx: "react",
    module: "commonjs",
    noImplicityAny: true,
    outDir: "./dist/",
    preserveConstEnums: true,
    removeComments: false,
    sourceMap: true,
    target: "es5"
  },
  include: [
    "./src/**/*"
  ]
}


