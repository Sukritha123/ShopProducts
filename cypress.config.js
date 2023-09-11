const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: "v1wafz",
  defaultCommandTimeout: 8000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },

    specPattern: ['cypress/integration/examples/*.feature']
  },
  env: {
    url: 'https://cms.demo.katalon.com'
  },
  retries: { runMode: 1, openMode:1 }, //to retry the test on failure


    reporter: "mochawesome",
    reporterOptions: {
       reportDir: "cypress/results",
       overwrite: true,
       html: true,
       json: true
    }

   
});
