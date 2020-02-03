module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        loose: true,
        modules: false
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-proposal-object-rest-spread",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    "@babel/plugin-transform-flow-strip-types",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "lodash",
    "@babel/plugin-transform-async-to-generator",
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 2
      }
    ],
    "@babel/plugin-syntax-dynamic-import",
    require.resolve("../webpack/babel-react-hook-hot-load"),
    // react-transform not compatible with babel 7
    [
      require.resolve("metro-babel7-plugin-react-transform"),
      {
        transforms: [
          {
            transform: "react-transform-hmr",
            imports: ["react"],
            locals: ["module"]
          },
          {
            transform: "react-transform-catch-errors",
            imports: ["react", "redbox-react"]
          }
        ]
      }
    ]
  ]
};
