import { pathsToModuleNameMapper } from "ts-jest";
import path from "path";
import fs from "fs";

const tsconfigPath = path.resolve("./tsconfig.json");
const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf-8"));
const { compilerOptions } = tsconfig;

const paths = pathsToModuleNameMapper(compilerOptions.paths || {}, {
  prefix: "<rootDir>/",
});

export default {
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.js",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.js",
    ...paths,
  },
  testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>.*/public"],
  transformIgnorePatterns: [
    "node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)",
  ],
  globals: {
    __PATH_PREFIX__: "",
  },
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    url: "http://localhost",
  },
  setupFiles: ["<rootDir>/loadershim.js"],
  setupFilesAfterEnv: ["<rootDir>/setup.tests.js"],
  collectCoverage: true,
  coverageReporters: ["text"],
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
};
