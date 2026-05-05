const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

// Remove the incorrect transformIgnorePatterns from customJestConfig
const customJestConfig = {
  setupFiles: ["<rootDir>/jest.polyfills.ts"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};

module.exports = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)();
  
  nextJestConfig.transformIgnorePatterns = [
    '/node_modules/(?!(msw|@mswjs|rettime|strict-event-emitter|until-async|@open-draft|outvariant|@bundled-es-modules)/)'
  ];
  
  return nextJestConfig;
};
