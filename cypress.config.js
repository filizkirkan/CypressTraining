const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "h4fcf5",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://demo.vercel.store",
    watchForFileChanges:false,
    viewportWidth:1920,
    viewportHeight:2000,
    pageLoadTimeout:20000,
    defaultCommandTimeout:10000,
    video:true
  },
});
