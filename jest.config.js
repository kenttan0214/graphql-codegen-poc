module.exports = {
  testTimeout: 20000, // https://github.com/facebook/jest/issues/11607#issuecomment-899955497
  verbose: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  preset: 'jest-dynalite',
  testRegex: 'test\\.ts$',
  setupFiles: ['./setupJest.js'],
  maxWorkers: '50%',
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   '**/src/**/*',
  //   // exclude main middleware
  //   '!**/src/middleware/index.ts',
  //   // exclude snapshots
  //   '!**/*.snap',
  //   // exclude .webpack folder
  //   '!**.webpack/**/*',
  //   // no need to test resolver index
  //   '!**/src/resolver/index.ts',
  //   // exclude gql server definitions
  //   '!**/src/handler/server.ts',
  //   // exclude mock folder
  //   '!**/__mock__/**/*',
  //   // exclude serverless folder
  //   '!**/.serverless/**/*',
  // ],
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100,
  //   },
  // },
};
