const currentEnv = process.env.NODE_ENV;

const commonPlugins = [
  "@babel/plugin-transform-runtime",
  "@babel/plugin-transform-async-to-generator",
  "@babel/transform-arrow-functions",
  "@babel/proposal-object-rest-spread",
  "@babel/proposal-class-properties",
  "@emotion",
];

const developmentPlugins = ["react-refresh/babel"];

const pluginsByEnv = {
  production: [...commonPlugins],
  development: [...commonPlugins, ...developmentPlugins],
  test: [...commonPlugins],
};

module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
  plugins: pluginsByEnv[currentEnv],
};
