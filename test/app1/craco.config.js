const cracoModuleFederationPlugin = require("./plugin.js");

module.exports = {
  plugins: [
    {
      plugin: cracoModuleFederationPlugin,
      options: { useNamedChunkIds: true, useChunkFilename: true },
    },
  ],
};
