// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb',
  ],

  globals: {
    __DEV__: true,
  },

  env: {
    node: true,
    browser: true,
    amd: true,
    es6: true,
    jest: true
  },

  rules: {
    // `js` and `jsx` are common extensions
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
      },
    ],

    'react/jsx-filename-extension': [
      1,
      {
        'extensions': ['.js', '.jsx'],
      },
    ],

    // Not supporting nested package.json yet
    // https://github.com/benmosher/eslint-plugin-import/issues/458
    'import/no-extraneous-dependencies': 'off',

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],

    // Switching off checks for linebreaks
    'linebreak-style': 'off',

    // Switching off default exports
    'import/prefer-default-export': 'off',
  },
};
