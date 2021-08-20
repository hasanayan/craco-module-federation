const deps = require("./package.json").dependencies;

console.log(process.env.ROOT_PATH_MODE);
module.exports = {
  name: "app1",
  exposes: {
    "./Button": "./src/Button",
  },
  remotes: {
    app2: "app2@http://localhost:3002/remoteEntry.js",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
