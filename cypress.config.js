const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
       baseUrl: 'https://cintoo.com/',
       
  },
  env: {
            
    showcase_url:  'showcase/',
},
reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: true,
    html: true,
    json: true,
  },
});
