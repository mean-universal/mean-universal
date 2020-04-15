/**
 * Configuration see:
 * https://github.com/just-jeb/angular-builders/tree/master/packages/jest
 * https://github.com/thymikee/jest-preset-angular
 */
module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'projects/nest-server/tsconfig.spec.json'
    }
  },
  testMatch: ['**/projects/nest-server/**/+(*.)+(spec|test).+(ts|js)?(x)'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {'^.+\\.(t|j)s$': 'ts-jest'},
  coverageDirectory: './coverage',
  testEnvironment: 'node'
};
