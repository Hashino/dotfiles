[![NPM version](https://img.shields.io/npm/v/postcss-csso.svg)](https://www.npmjs.com/package/postcss-csso)
[![Build Status](https://github.com/lahmatiy/postcss-csso/actions/workflows/build.yml/badge.svg)](https://github.com/lahmatiy/postcss-csso/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/lahmatiy/postcss-csso/badge.svg?branch=master)](https://coveralls.io/github/lahmatiy/postcss-csso?branch=master)
[![Twitter](https://img.shields.io/badge/Twitter-@cssoptimizer-blue.svg)](https://twitter.com/cssoptimizer)

# postcss-csso

[PostCSS](https://github.com/postcss/postcss) plugin to minify CSS using [CSSO](https://github.com/css/csso) (a CSS minifier with structural optimizations).

Under the hood, the plugin converts `PostCSS` AST into `CSSO`'s AST, optimises it and converts back. The plugin uses `PostCSS`'s input AST nodes (or their clones) on back convertation, so the shape of the original `PostCSS`'s nodes is preserved after the compression in most cases (e.g. properties added by other plugins aren't lost). This approach makes it possible to achieve great performance and correct source maps generation.

The performance of `postcss-csso` is approximately the same as `CSSO` has itself (see `CSSO` numbers in [minifiers comparison table](https://goalsmashers.github.io/css-minification-benchmark/)).

> If you have any difficulties with the output of this plugin, please use the [CSSO tracker](https://github.com/css/csso/issues).

## Install

```
npm install postcss-csso
```

## Usage

```js
import postcss from 'postcss';
import csso from 'postcss-csso';
// CommonJS:
// const csso = require('postcss-csso');

postcss([
    csso
])
    .process('.a { color: #FF0000; } .b { color: rgba(255, 0, 0, 1) }')
    .then((result) => {
        console.log(result.css);
        // .a,.b{color:red}
    });
```

Plugin takes the same [options](https://github.com/css/csso#compressast-options) as `compress()` method of CSSO with no exception.

```js
postcss([
    csso({ restructure: false })
])
    .process('.a { color: #FF0000; } .b { color: rgba(255, 0, 0, 1) }')
    .then((result) => {
        console.log(result.css);
        // .a{color:red}.b{color:red}
    });
```

Using in `postcss.config.js`:

```js
import csso from 'postcss-csso';

export const plugins = [
    csso({
        restructure: false
    })
];
```

## License

MIT
