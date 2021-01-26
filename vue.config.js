module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  "devServer": {
    "proxy": {
      "/api": {
        "target": process.env.API_URL || 'https://registry.npmjs.org',
        "pathRewrite": { '^/api': '' },
        "changeOrigin": true,
        "secure": false
      },
    }
  }
}