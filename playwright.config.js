// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './test/playwright',

  use: {
    baseURL: 'http://localhost:8080',
    headless: true,
  },

  webServer: {
    command: 'npm start',
    port: 8080,
    // eslint-disable-next-line no-undef
    reuseExistingServer: !process.env.CI,
  },
});

