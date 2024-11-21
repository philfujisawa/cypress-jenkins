const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: './reports',
    overwrite: true,
    html: true,
    json: true,
    reportFilename: 'mocha-report'
  },
})
