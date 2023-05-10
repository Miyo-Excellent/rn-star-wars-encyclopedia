module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@": "./",
            "~": "./src",
            "@assets": "./assets",
            tests: "./tests",
            "@models": "./src/domain/models",
            "@repositoriesData": "./src/domain/repositories",
            "@servicesData": "./src/domain/services",
            "@components": "./src/infrastructure/components",
            "@repositories": "./src/infrastructure/repositories",
            "@services": "./src/infrastructure/services",
            "@views": "./src/infrastructure/views",
            "@viewmodels": "./src/infrastructure/viewmodels",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
