import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});


const config = {
  testEnvironment: "jsdom",
  collectCoverage: false,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: [
    "src/**",
    "!src/**/layout.tsx",
    "!src/**/*.type.ts",
    "!src/**/**.contract.ts",
    "!src/**/**.response.ts",
    "!src/**/**.enum.ts",
    "!src/app/lib/**",
    "!src/app/components/ui/**",
  ],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

};

// eslint-disable-next-line import-x/no-default-export
export default createJestConfig(config);
