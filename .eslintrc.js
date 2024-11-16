module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react-native', 'prettier', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      },
      node: {
        paths: ['app'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'prefer-arrow-callback': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'off'
  },
  globals: {
    __DEV__: true
  }
};
