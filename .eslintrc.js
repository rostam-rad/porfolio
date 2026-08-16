export default {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.js"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      node: {
        paths: ["src"],
        alias: {
          components: "./src/components",
          action: "./src/action",
          assets: "./src/assets",
          constants: "./src/constants",
          containers: "./src/containers",
          reducers: "./src/reducers",
          store: "./src/store",
          styles: "./src/styles",
        },
      },
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
