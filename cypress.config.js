const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://nextlab.mksolutions.com.br:4000/register'
  }
})