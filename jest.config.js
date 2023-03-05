module.exports ={
    testEnvironment: 'node',
    testMatch: ['**/test/**/*.test.js'],
    testPathIgnorePatterns: ['/node_modules/'],
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['**/server.js'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    setTimeout:10000
}