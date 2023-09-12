const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ku9e2h',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
