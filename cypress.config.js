const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5176", // Uygulamanın çalıştığı portu kullan!
  },
});
