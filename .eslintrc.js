module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    quotes: [2, 'single'],
    'prettier/prettier': [
      'error',
      { singleQuote: true, parser: 'flow', semi: true, trailingComma: 'none' }
    ],
    camelcase: 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off'
  }
};
