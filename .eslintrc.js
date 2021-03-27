module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['standard', 'plugin:react/recommended', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react'],
  rules: {
    'react/jsx-uses-react': 'warn',
    'no-multi-spaces': 'off',
    'react/prop-types': 'off',
    'no-mixed-operators': 'off',
    'no-console': 'warn',
    'react/display-name': 'off',
    'no-shadow': 'warn',
    'prefer-promise-reject-errors': 'off',
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
