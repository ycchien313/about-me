module.exports = {
  extends: ['react-app', 'eslint:recommended', 'plugin:react/recommended'],
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react-hooks/exhaustive-deps': 0,
    'react/display-name': 0,
  },
};
