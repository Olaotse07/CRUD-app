// playwright.config.js
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30000,
  expect: {
    timeout: 60000,
  },
  fullyParallel: true,
  workers: 1,
  reporter: [["list"], ["json", { outputFile: "test-results/results.json" }]], // Reporters
  use: {
    trace: "on-first-retry",
    baseURL: "http://localhost:3000",
  },
});
