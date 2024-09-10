const { defineConfig } = require('@playwright/test');
const { PlaywrightTestAllureReporter } = require('allure-playwright');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();setx JAVA_HOME "C:\Program Files\Java\jdk-22"

/**
 * @see https://playwright.dev/docs/test-configuration
 */

module.exports = defineConfig({
  testDir: 'tests',
  // Run tests in files in parallel
  fullyParallel: false,
  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,
  // Retry on CI only
  retries: process.env.CI ? 2 : 0,
  // Opt out of parallel tests on CI.
  workers: 1,
  // Reporter to use. See https://playwright.dev/docs/test-reporters
  reporter: [
    ['allure-playwright', { outputDir: './allure-results' }]
  ],

  // Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions.
  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    // baseURL: 'http://127.0.0.1:3000',

    // Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer
    trace: 'on-first-retry',
    launchOptions: {
      slowMo: 2000,
      args: ['--lang=ru-RU']
    },
    
    // Run in headed mode (with GUI)
  
  },

  // Configure projects for major browsers
  projects: [
 
 
 {
    name: 'Desktop Chrome',
    use: {
      browserName: 'chromium',
      headless: false,
    },
  }, 

  
   
  ],
  // Run your local dev server before starting the tests
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
