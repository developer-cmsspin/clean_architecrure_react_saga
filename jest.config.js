/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/mocks/fileMock.js",
    "\\.(css|less)$": "<rootDir>/test/mocks/fileMock.js"
  }
};