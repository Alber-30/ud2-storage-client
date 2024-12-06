const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": require("path").resolve(__dirname, "src"), // Aquí estamos asegurando que '@' apunte a la carpeta 'src'
      },
    },
  },
});
