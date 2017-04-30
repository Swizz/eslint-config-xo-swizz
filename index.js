'use strict'

module.exports = {
  extends: ['xo-react'],

  semicolon: false,
  space: true,

  settings: {
    react: {
      pragma: 'Snabbdom'
    }
  },

  rules: {
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    'new-cap': ['error', {capIsNew: false}],
    'no-unused-vars': ['error', {varsIgnorePattern: '^_', argsIgnorePattern: '^_'}],
    'dot-location': ['error', 'object'],
    'no-negated-condition': 'off',

    'react/jsx-curly-spacing': ['error', 'always'],
    'react/jsx-no-bind': ['error', {allowArrowFunctions: true}],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/self-closing-comp': ['error', {component: true, html: false}],
    'react/jsx-pascal-case': 'error',
    'react/prop-types': 'off',

    'import/no-named-as-default-member': 'off',
    'import/prefer-default-export': 'off'
  }
}
