module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'scss'],
  rootDir: 'src',
  testRegex: '.*\\.test\\.tsx$',
  transform: {
    '^.+\\.tsx$': ['ts-jest', 'babel-jest'],
  },
  collectCoverageFrom: ['**/*.tsx'],
  coverageDirectory: '../coverage',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
}
