'use strict';

const syntax = require('csso/syntax');
const postcssToCsso = require('./postcssToCsso.cjs');
const cssoToPostcss = require('./cssoToPostcss.cjs');

const index = Object.assign((options = {}) => ({
    postcssPlugin: 'postcss-csso',
    OnceExit(root, { result, postcss }) {
        const cssoAst = postcssToCsso(root);
        const compressedAst = syntax.compress(cssoAst, options).ast;

        result.root = cssoToPostcss(compressedAst, postcss);
    }
}), { postcss: true });

module.exports = index;
