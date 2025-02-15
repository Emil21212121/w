/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'allure-jest/node',
  setupFiles: ['dotenv/config'],
  verbose: process.env.CI !== 'true',
}

module.exports = config
