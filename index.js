const webpack = require("webpack");
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

module.exports = {
  overrideWebpackConfig: ({
    webpackConfig,
    context: { env },
    pluginOptions: {
      namedModuleIdsOnProduction = false,
      namedChunkIdsOnProduction = false,
    },
  }) => {
    const fastRefreshEnabled = process.env.FAST_REFRESH !== "false";
    const isEnvDevelopment = env === "development";

    webpackConfig.output = {
      ...webpackConfig.output,
      publicPath: "auto",
    };

    webpackConfig.optimization = {
      chunkIds:
        isEnvDevelopment || namedChunkIdsOnProduction ? "named" : undefined,
      moduleIds:
        isEnvDevelopment || namedModuleIdsOnProduction ? "named" : undefined,
    };

    const htmlWebpackPlugin = webpackConfig.plugins.find(
      (plugin) => plugin.constructor.name === "HtmlWebpackPlugin"
    );

    htmlWebpackPlugin.userOptions.hash = true;
    if (fastRefreshEnabled && isEnvDevelopment) {
      htmlWebpackPlugin.userOptions.chunks = ["main"];
    }

    return webpackConfig;
  },

  overrideCracoConfig: ({
    cracoConfig,
    pluginOptions: {
      federationConfig,
      useExternalRemotesPlugin = false,
      removeWatchMissingNodeModulesPlugin = true,
    },
  }) => {
    if (!cracoConfig.webpack) cracoConfig.webpack = {};
    if (!cracoConfig.webpack.plugins) cracoConfig.webpack.plugins = {};

    cracoConfig.webpack.plugins.add = [
      ...(cracoConfig.webpack.plugins.add || []),
      new ModuleFederationPlugin(federationConfig),
      useExternalRemotesPlugin && new ExternalTemplateRemotesPlugin(),
    ].filter(Boolean);

    cracoConfig.webpack.plugins.remove = [
      ...(cracoConfig.webpack.plugins.remove || []),
      removeWatchMissingNodeModulesPlugin && "WatchMissingNodeModulesPlugin",
    ].filter(Boolean);

    return cracoConfig;
  },
};
