// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  clearMocks: true,
  coverageDirectory: 'coverage',
  rootDir: './src',
  transform: {
    '^.+\\.ts$': ['ts-jest', { babelConfig: true }],
  },
  setupFiles: ['./tests/jest-setup.ts'],
  testEnvironment: 'node',
};
