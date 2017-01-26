'use strict';
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
		'padded-blocks': ['error', 'always'],
		'object-curly-spacing': ['error', 'always'],
		'brace-style': ['error', '1tbs', {allowSingleLine: true}],
		'new-cap': ['error', {capIsNew: false}],
		'no-unused-vars': ['error', {varsIgnorePattern: '^_', argsIgnorePattern: '^_'}],
		'dot-location': ['error', 'object'],
		'react/jsx-curly-spacing': [2, 'always'],
		'react/jsx-no-bind': [2, {allowArrowFunctions: true}],
		'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
		'react/jsx-pascal-case': 2
	}
};
