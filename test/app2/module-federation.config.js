module.exports = {
  name: "app2",
  exposes: {
    "./App": "./src/Expose",
  },
  filename: "remoteEntry.js",
  shared: {
    react: {
      singleton: true,
      requiredVersion: "^17.0.0",
    },
    "react-dom": {
      singleton: true,
      requiredVersion: "^17.0.0",
    },
  },
};
