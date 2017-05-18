# eslint-config-xo-swizz
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) based on [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo)


## Use with XO

```
$ npm install --save-dev eslint-config-xo-swizz
```

```json
{
	"name": "my-awesome-project",
	"xo": {
		"extends": "xo-swizz",
		"settings": {
			"react": {
				"pragma": "Snabbdom"
			}
		}
	}
}
```


## Related

- [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo) - ESLint shareable config for XO
- [XO](https://github.com/sindresorhus/xo)


## License

MIT © Quentin Gerodel
