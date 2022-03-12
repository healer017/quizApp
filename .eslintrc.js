module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: ['never'],
    'react-native/no-inline-styles': 1,
    'prettier/prettier': [
      'error',
      {endOfLine: 'auto', 'no-inline-styles': false},
    ],
  },
}
