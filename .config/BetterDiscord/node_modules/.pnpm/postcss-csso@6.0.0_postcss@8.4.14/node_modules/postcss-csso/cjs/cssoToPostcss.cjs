'use strict';

const syntax = require('csso/syntax');

const DEFAULT_RAWS = {
    before: '',
    after: '',
    between: '',
    semicolon: false,
    left: '',
    right: ''
};
const ROOT_RAWS = {
    semicolon: true
};
const DECL_RAWS = {
    before: '',
    after: '',
    between: ':',
    important: '!important'
};

function clone(source) {
    return Object.assign(
        Object.create(Object.getPrototypeOf(source)),
        source
    );
}

function listToPostcss(list, postcss, used) {
    const result = [];
    let before = '';

    list.forEach((node) => {
        if (node.type === 'Raw' || node.type === 'Space') {
            // attach raw and spaces to next node
            before += node.value;
        } else {
            const postcssNode = cssoToPostcss(node, postcss, used);

            if (before !== '') {
                postcssNode.raws = clone(postcssNode.raws);
                postcssNode.raws.before = before;
                before = '';
            }

            result.push(postcssNode);
        }
    });

    return result;
}

function cssoToPostcss(node, postcss, used) {
    let postcssNode = node.loc ? node.loc.postcssNode : null;

    if (postcssNode) {
        // used is null when WeakSet is not supported
        if (used.has(postcssNode)) {
            // make node clone if it's already used in resulting tree
            postcssNode = clone(postcssNode);
        } else {
            used.add(postcssNode);
        }
    }

    switch (node.type) {
        case 'StyleSheet':
            if (!postcssNode) {
                postcssNode = postcss.root();
            }

            postcssNode.raws = ROOT_RAWS;
            postcssNode.nodes = listToPostcss(node.children, postcss, used);

            break;

        case 'Atrule':
            if (!postcssNode) {
                postcssNode = postcss.atRule();
            }

            postcssNode.raws = DEFAULT_RAWS;
            postcssNode.name = node.name;
            postcssNode.params = node.prelude ? syntax.generate(node.prelude) : '';
            postcssNode.nodes = node.block ? listToPostcss(node.block.children, postcss, used) : undefined;

            break;

        case 'Rule':
            if (!postcssNode) {
                postcssNode = postcss.rule();
            }

            postcssNode.raws = DEFAULT_RAWS;
            postcssNode.selector = syntax.generate(node.prelude);
            postcssNode.nodes = listToPostcss(node.block.children, postcss, used);

            break;

        case 'Declaration':
            if (!postcssNode) {
                postcssNode = postcss.decl();
            }

            if (typeof node.important === 'string') {
                postcssNode.raws = clone(DECL_RAWS);
                postcssNode.raws.important = '!' + node.important;
            } else {
                postcssNode.raws = DECL_RAWS;
            }

            postcssNode.prop = node.property;
            postcssNode.value = syntax.generate(node.value);
            postcssNode.important = Boolean(node.important);

            break;

        case 'Comment':
            if (!postcssNode) {
                postcssNode = postcss.comment();
            }

            postcssNode.raws = DEFAULT_RAWS;
            postcssNode.text = node.value;

            break;
    }

    return postcssNode;
}
const cssoToPostcss$1 = (node, postcss) =>
    cssoToPostcss(node, postcss, new WeakSet());

module.exports = cssoToPostcss$1;
