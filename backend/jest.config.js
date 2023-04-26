
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ['./src/infrastructure/test/setEnvVar.ts'],
    moduleFileExtensions: ['ts', 'js'],
    transformIgnorePatterns: ['/node_modules/'],
    testPathIgnorePatterns: ["build"],
    transform: {
        '^.+\\.(js|ts)$': 'ts-jest',
    },
    testMatch: ['**/src/**/*.test.+(ts|js)'],
    verbose: true,
    globalSetup: ""
}