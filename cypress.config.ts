import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    testIsolation: false,
    specPattern: "cypress/e2e/**/*.ts",
    setupNodeEvents(on, config) {
    
    },
  },
});
