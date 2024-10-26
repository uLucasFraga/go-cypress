const { defineConfig } = require('cypress');
const cucumber = require("cypress-cucumber-preprocessor").default;
const { allureCypress } = require('allure-cypress/reporter');

const CONFIG = {
  timeOut: 10000,
  baseUrl: 'https://www.saucedemo.com',
  spec: '**/*.feature',
  resultsDir: './allure-results'
};

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    defaultCommandTimeout: CONFIG.timeOut,
    baseUrl: CONFIG.baseUrl,
    specPattern: CONFIG.spec,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      allureCypress(on, {
        resultsDir: CONFIG.resultsDir,
      });
      return config;
    },
    env: {
      allureReuseAfterSpec: true
    },
  }
});