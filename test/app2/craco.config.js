const cracoModuleFederation = require("../../index.js");
const federationConfig = require("./module-federation.config.js");

module.exports = {
  plugins: [
    {
      plugin: cracoModuleFederation,
      options: {
        federationConfig,
      },
    },
  ],
};
