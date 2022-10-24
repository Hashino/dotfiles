import { compress } from 'csso/syntax';
import postcssToCsso from './postcssToCsso.js';
import cssoToPostcss from './cssoToPostcss.js';

export default Object.assign((options = {}) => ({
    postcssPlugin: 'postcss-csso',
    OnceExit(root, { result, postcss }) {
        const cssoAst = postcssToCsso(root);
        const compressedAst = compress(cssoAst, options).ast;

        result.root = cssoToPostcss(compressedAst, postcss);
    }
}), { postcss: true });
