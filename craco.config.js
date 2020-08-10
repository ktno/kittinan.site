const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@font-size-base': '16px',
              '@primary-color': '#e0ebe8',
              '@menu-bg': '@primary-color',
              '@menu-item-color': '#45b29a',
              '@menu-highlight-color': '#21564b'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
