module.exports = {
  root: true,
  extends: ['plugin:react/recommended', 'airbnb'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'one-var': 0,
    'one-var-declaration-per-line': 0,
    'new-cap': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'comma-dangle': 2,
    'no-console': 2,
    'class-methods-use-this': 0,
    curly: ['error', 'multi-line'],
    'import/no-unresolved': [2, { commonjs: true }],
    'no-shadow': 2,
  },
};
