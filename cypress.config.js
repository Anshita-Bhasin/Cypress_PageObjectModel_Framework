const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://naveenautomationlabs.com/opencart/',

    setupNodeEvents(on, config) {

      const cucumber = require('cypress-cucumber-preprocessor').default
      on('file:preprocessor', cucumber())

      // implement node event listeners here
    },

    specPattern: 'cypress/e2e/features/*.{feature,features}',
    excludeSpecPattern: "**/cypress/pages/*,cypress/e2e/step-definition/*",
    experimentalSessionAndOrigin: false,
    watchForFileChanges: false,



    "retries": {
      // Configure retry attempts for `cypress run`
      // Default is 0
      "runMode": 1,
      // Configure retry attempts for `cypress open`
      // Default is 0
      "openMode": 1
    },



    
  
  },
});



