/**
 * Configuration see:
 * https://github.com/just-jeb/angular-builders/tree/master/packages/jest
 * https://github.com/thymikee/jest-preset-angular
 */
module.exports = {
  testMatch: ['**/projects/universal-app/**/+(*.)+(spec|test).+(ts|js)?(x)'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: './coverage'
};
