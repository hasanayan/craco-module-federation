module.exports = {
  name: "app1",
  remotes: {
    app2: "app2@http://localhost:3001/remoteEntry.js",
  },
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/Expose",
  },
};
