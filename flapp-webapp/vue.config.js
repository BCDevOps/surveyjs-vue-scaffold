module.exports = {
  chainWebpack: config => {
    config.module.rules.delete("eslint");
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`,
        prependData: `@import "@/styles/_common.scss";`,
        prependData: `@import "@/styles/_survey.scss";`
      }
    }
  }
};
