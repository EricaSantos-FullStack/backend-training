module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./server/infra/config/jest.setup.js'],
  moduleDirectories: ['node_modules', 'server'],
  testPathIgnorePatterns: ['./server/infra/migrations/'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};
