module.exports = {
  root: true,
  rules: {
    'import/prefer-default-export': 0,
    'no-nested-ternary': 0,
    'class-methods-use-this': 0,
    'arrow-body-style': 0,
    'no-shadow': 0,
    'no-await-in-loop': 0,
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/brace-style': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-throw-literal': 0,

    // Added while upgrading @typescript-eslint/*
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-argument': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-redeclare': 0,
  },
  globals: {
    document: true,
    window: true,
    fetch: true,
    Headers: true,
  },
  env: {
    jest: true,
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
};
