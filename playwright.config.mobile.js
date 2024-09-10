const { defineConfig } = require('@playwright/test');
const { PlaywrightTestAllureReporter } = require('allure-playwright');
const { devices } = require('@playwright/test');
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
    headless: false, 
  },

  // Configure projects for major browsers
  projects: [
 

{
    name: 'Mobile Chrome - iPhone 11',
    use: {
      ...devices['iPhone 11'],
      browserName: 'chromium',
    },
  },
   {
    name: 'Mobile Safari - iPhone 12',
    use: {
      ...devices['iPhone 12'],
      browserName: 'webkit',
    },
  },
  {
    name: 'Mobile Safari - iPhone 13',
    use: {
      ...devices['iPhone 13'],
      browserName: 'webkit',
    },
  },
  {
    name: 'Mobile Safari - iPhone 14',
    use: {
      ...devices['iPhone 14'],
      browserName: 'webkit',
    },
  },
  {
    name: 'Mobile Chrome - Hot30i',
    use: {
      browserName: 'chromium',
      viewport: { width: 720, height: 1600 },
      userAgent: 'Mozilla/5.0 (Linux; Android 12; Infinix Hot30i) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Mobile Safari/537.36',
    },
  },
  {
    name: 'Mobile Chrome - Redmi 12C',
    use: {
      browserName: 'chromium',
      viewport: { width: 720, height: 1650 },
      userAgent: 'Mozilla/5.0 (Linux; Android 12; Redmi 12C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36',
    },
  },
  {
    name: 'Mobile Chrome - Redmi 10C',
    use: {
      browserName: 'chromium',
      viewport: { width: 720, height: 1650 },
      userAgent: 'Mozilla/5.0 (Linux; Android 11; Redmi 10C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Mobile Safari/537.36',
    },
  },
  {
    name: 'Mobile Chrome - Redmi 9C',
    use: {
      browserName: 'chromium',
      viewport: { width: 720, height: 1600 },
      userAgent: 'Mozilla/5.0 (Linux; Android 10; Redmi 9C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.99 Mobile Safari/537.36',
    },
  },
  {
    name: 'Mobile Chrome - Redmi 9A',
    use: {
      browserName: 'chromium',
      viewport: { width: 720, height: 1600 },
      userAgent: 'Mozilla/5.0 (Linux; Android 10; Redmi 9A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.99 Mobile Safari/537.36',
    },
  },
  {
    name: 'Mobile Chrome - Redmi A2+',
    use: {
      browserName: 'chromium',
      viewport: { width: 720, height: 1600 },
      userAgent: 'Mozilla/5.0 (Linux; Android 11; Redmi A2+) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36',
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




