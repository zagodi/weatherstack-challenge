module.exports = {
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};
