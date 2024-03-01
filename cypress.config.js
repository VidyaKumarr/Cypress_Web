const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  video: true,
  e2e: {    
    baseUrl : 'https://www.amazon.in/',
    specPattern: "**/*/*/*.feature",

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});