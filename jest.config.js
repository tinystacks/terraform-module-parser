// eslint-disable-next-line
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['.d.ts', '.js'],
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 75, // because of default value branches
      functions: 90,
      lines: 95,
      statements: 95
  }
}
};