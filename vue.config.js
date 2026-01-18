const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  pages: {
    index: 'src/index/main.js',
    backend: 'src/backend/main.js',
    frontend: 'src/frontend/main.js',
    hydrant: 'src/hydrant/main.js'
  }
})