module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          components: "./src/components",
          action: "./src/action",
          assets: "./src/assets",
          constants: "./src/constants",
          containers: "./src/containers",
          courses: "./src/courses",
          reducers: "./src/reducers",
          store: "./src/store",
          styles: "./src/styles",
          utils: "./src/utils",
        },
      },
    ],
  ],
};
