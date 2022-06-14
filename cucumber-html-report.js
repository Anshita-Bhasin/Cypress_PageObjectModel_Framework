const report = require('multiple-cucumber-html-reporter');
report.generate({
  jsonDir: 'cypress/reports/cucumber-json', // ** Path of .json file **//
  reportPath: 'cypress/reports/Results', // ** Path of .html file **//
  metadata: {
    browser: {
      name: 'chrome',
      version: '98',
    },
    device: 'Local test machine',
    platform: {
      name: 'MAC',
      version: '14',
    },
  },
});
