# webpack-superalias

Like webpack's default alias, but more powerful.

```bash
npm install --save-dev webpack-superalias
```

It's a plugin that will transform any request using a user-specified function.

```js
new SuperAlias(path => path)
```

Note that paths are either an absolute path, or an absolute path with a load of `?loader`s on the end.

To replace all files that have an extension `.m.css` with `.css`, you can use the setup below.

```js
// webpack.config.js
const SuperAlias = require('webpack-superalias');

module.exports = {
  ...
  plugins: [
    new SuperAlias(path => path.replace(/\.m\.css($|\?)/, '.css'));
  ]
};
```
