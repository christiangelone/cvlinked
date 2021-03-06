module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'import/extensions': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  plugins: [
    '@typescript-eslint'
  ],
  settings: {
    "import/resolver": {
      node: {
        "extensions": [".ts", ".tsx", ".js", ".jsx"]
      }
    },
  },
};
