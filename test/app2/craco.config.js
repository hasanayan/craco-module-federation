const cracoModuleFederationPlugin = require("./plugin.js");

module.exports = {
  plugins: [
    {
      plugin: cracoModuleFederationPlugin,
    },
  ],
  webpack: {
    plugins: {
      remove: ["ModuleScopePlugin"],
    },
  },
};
