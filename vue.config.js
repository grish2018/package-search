module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  "devServer": {
    "proxy": {
      "/npm": {
        "target": process.env.API_URL || 'https://registry.npmjs.org',
        "pathRewrite": { '^/api': '' },
        "changeOrigin": true,
        "secure": false
      },
    }
  }
}