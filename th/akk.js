/* global define, module, require */

/* eslint {
  "accessor-pairs": [2, {
    "getWithoutSet": true,
    "setWithoutGet": false
  }],
  "array-bracket-newline": [2, "consistent"],
  "array-bracket-spacing": [2, "never", {
    "singleValue": false,
    "objectsInArrays": true,
    "arraysInArrays": true
  }],
  "array-callback-return": ["error", { allowImplicit: false }],
  "array-element-newline": [2, "consistent"],
  "arrow-body-style": [2, "as-needed", {
    "requireReturnForObjectLiteral": false
  }],
  "arrow-parens": 2,
  "arrow-spacing": 2,
  "block-scoped-var": 2,
  "block-spacing": [2, "always"],
  "brace-style": [2, "1tbs", {
    "allowSingleLine": true
  }],
  "callback-return": 2,
  "camelcase": 2,
  "capitalized-comments": [2, "always", {
    "line": {
      "ignorePattern": "",
      "ignoreInlineComments": false,
      "ignoreConsecutiveComments": false
    },
    "block": {
      "ignorePattern": "",
      "ignoreInlineComments": false,
      "ignoreConsecutiveComments": false
    }
  }],
  "class-methods-use-this": 2,
  "comma-dangle": [2, {
    "arrays": "always-multiline",
    "objects": "always-multiline",
    "imports": "always-multiline",
    "exports": "always-multiline",
    "functions": "ignore"
  }],
  "comma-spacing": 2,
  "comma-style": [2, "first", {
    "exceptions": {
      "VariableDeclaration": false,
      "ObjectExpression": true,
      "ObjectPattern": false,
      "ArrayExpression": true,
      "ArrayPattern": false,
      "FunctionDeclaration": false,
      "FunctionExpression": false,
      "ArrowFunctionExpression": false,
      "CallExpression": true,
      "ImportDeclaration": false,
      "NewExpression": false,
    }
  }],
  "complexity": 2,
  "computed-property-spacing": 2,
  "consistent-return": 2,
  "consistent-this": 2,
  "constructor-super": 2,
  "curly": 2,
  "default-case": 2,
  "dot-location": [2, "property"],
  "dot-notation": 2,
  "eol-last": 2,
  "eqeqeq": 2,
  "for-direction": 2,
  "func-call-spacing": 2,
  "func-name-matching": 2,
  "func-names": 2,
  "func-style": 2,
  "function-paren-newline": [2, "consistent"],
  "generator-star-spacing": 2,
  "getter-return": 2,
  "global-require": 2,
  "guard-for-in": 2,
  "handle-callback-err": 2,
  "id-blacklist": 2,
  "id-length": [2, {
    "min": 2,
    "max": Infinity,
    "exceptions": ["$", "i"],
    "properties": "never"
  }],
  "id-match": 2,
  "implicit-arrow-linebreak": 2,
  "indent": [2, 2, {
    "SwitchCase": 0,
    "VariableDeclarator": {
      "var": 2,
      "let": 2,
      "const": 2
    },
    "outerIIFEBody": 1,
    "MemberExpression": 1,
    "FunctionDeclaration": {
      "parameters": "first",
      "body": 1
    },
    "FunctionExpression": {
      "parameters": "first",
      "body": 1
    },
    "CallExpression": {
      "arguments": "first"
    },
    "ArrayExpression": "first",
    "ObjectExpression": "first",
    "ImportDeclaration": "first",
    "flatTernaryExpressions": false,
    "ignoredNodes": [],
    "ignoreComments": false
  }],
  "init-declarations": 2,
  "jsx-quotes": 2,
  "key-spacing": [2, {
    "singleLine": {
      "mode": "strict",
      "beforeColon": false,
      "afterColon": true
    },
    "multiLine": {
      "mode": "strict",
      "beforeColon": false,
      "afterColon": true
    },
    "align": {
      "mode": "strict",
      "on": "colon",
      "beforeColon": false,
      "afterColon": true
    }
}],
  "keyword-spacing": 2,
  "line-comment-position": 2,
  "linebreak-style": 2,
  "lines-around-comment": 2,
  "lines-between-class-members": 2,
  "max-classes-per-file": 2,
  "max-depth": 2,
  "max-len": [2, {
    "code": 80,
    "comments": 80,
    "tabWidth": 2,
    "ignorePattern": "",
    "ignoreComments": false,
    "ignoreStrings": true,
    "ignoreUrls": false,
    "ignoreTemplateLiterals": false,
    "ignoreRegExpLiterals": false,
    "ignoreTrailingComments": false
  }],
  "max-lines-per-function": 2,
  "max-lines": [2, {
    "max": 420,
    "skipComments": true,
    "skipBlankLines": true
  }],
  "max-nested-callbacks": 2,
  "max-params": 2,
  "max-statements-per-line": [2, {
    "max": 2
  }],
  "max-statements": [2, 10, {
    "ignoreTopLevelFunctions": true
  }],
  "multiline-comment-style": [0, "bare-block"],
  "multiline-ternary": [2, "always-multiline"],
  "new-cap": 2,
  "new-parens": 2,
  "newline-per-chained-call": [2, {
    "ignoreChainWithDepth": 3
  }],
  "no-alert": 2,
  "no-array-constructor": 2,
  "no-async-promise-executor": 2,
  "no-await-in-loop": 2,
  "no-bitwise": 2,
  "no-buffer-constructor": 2,
  "no-caller": 2,
  "no-case-declarations": 2,
  "no-class-assign": 2,
  "no-compare-neg-zero": 2,
  "no-cond-assign": 2,
  "no-confusing-arrow": [2, {"allowParens": true}],
  "no-console": [2, {
    allow: ["error", "log", "warn"]
  }],
  "no-const-assign": 2,
  "no-constant-condition": 2,
  "no-continue": 2,
  "no-control-regex": 2,
  "no-debugger": 2,
  "no-delete-var": 2,
  "no-div-regex": 2,
  "no-dupe-args": 2,
  "no-dupe-class-members": 2,
  "no-dupe-keys": 2,
  "no-duplicate-case": 2,
  "no-duplicate-imports": 2,
  "no-else-return": 2,
  "no-empty-character-class": 2,
  "no-empty-function": 2,
  "no-empty-pattern": 2,
  "no-empty": 2,
  "no-eq-null": 2,
  "no-eval": 2,
  "no-ex-assign": 2,
  "no-extend-native": 2,
  "no-extra-bind": 2,
  "no-extra-boolean-cast": 2,
  "no-extra-label": 2,
  "no-extra-parens": [2, "all", {
    "conditionalAssign": true,
    "nestedBinaryExpressions": false,
    "returnAssign": false,
    "ignoreJSX": "none",
    "enforceForArrowConditionals": false
  }],
  "no-extra-semi": 2,
  "no-fallthrough": 2,
  "no-floating-decimal": 2,
  "no-func-assign": 2,
  "no-global-assign": 2,
  "no-implicit-coercion": 2,
  "no-implicit-globals": 2,
  "no-implied-eval": 2,
  "no-inline-comments": 2,
  "no-inner-declarations": 2,
  "no-invalid-regexp": 2,
  "no-invalid-this": 2,
  "no-irregular-whitespace": 2,
  "no-iterator": 2,
  "no-label-var": 2,
  "no-labels": 2,
  "no-lone-blocks": 2,
  "no-lonely-if": 2,
  "no-loop-func": 2,
  "no-magic-numbers": [2, {
    "detectObjects": true,
    "enforceConst": false,
    "ignore": [1],
    "ignoreArrayIndexes": true
  }],
  "no-misleading-character-class": 2,
  "no-mixed-operators": 2,
  "no-mixed-requires": 2,
  "no-mixed-spaces-and-tabs": 2,
  "no-multi-assign": 2,
  "no-multi-spaces": 2,
  "no-multi-str": 2,
  "no-multiple-empty-lines": [2, {
    "max": 2,
    "maxEOF": 1,
    "maxBOF": 0
  }],
  "no-negated-condition": 2,
  "no-nested-ternary": 2,
  "no-new-func": 2,
  "no-new-object": 2,
  "no-new-require": 2,
  "no-new-symbol": 2,
  "no-new-wrappers": 2,
  "no-new": 2,
  "no-obj-calls": 2,
  "no-octal-escape": 2,
  "no-octal": 2,
  "no-param-reassign": 2,
  "no-path-concat": 2,
  "no-plusplus": 2,
  "no-process-env": 2,
  "no-process-exit": 2,
  "no-proto": 2,
  "no-prototype-builtins": 2,
  "no-redeclare": 2,
  "no-regex-spaces": 2,
  "no-restricted-globals": 2,
  "no-restricted-imports": 2,
  "no-restricted-modules": 2,
  "no-restricted-properties": 2,
  "no-restricted-syntax": 2,
  "no-return-assign": [2, "except-parens"],
  "no-return-await": 2,
  "no-script-url": 2,
  "no-self-assign": 2,
  "no-self-compare": 2,
  "no-sequences": 2,
  "no-shadow-restricted-names": 2,
  "no-shadow": 2,
  "no-sparse-arrays": 2,
  "no-sync": 2,
  "no-tabs": 2,
  "no-template-curly-in-string": 2,
  "no-ternary": 0,
  "no-this-before-super": 2,
  "no-throw-literal": 2,
  "no-trailing-spaces": 2,
  "no-undef-init": 2,
  "no-undef": 2,
  "no-undefined": 2,
  "no-underscore-dangle": 2,
  "no-unexpected-multiline": 2,
  "no-unmodified-loop-condition": 2,
  "no-unneeded-ternary": 2,
  "no-unreachable": 2,
  "no-unsafe-finally": 2,
  "no-unsafe-negation": 2,
  "no-unused-expressions": 2,
  "no-unused-labels": 2,
  "no-unused-vars": 2,
  "no-use-before-define": 2,
  "no-useless-call": 2,
  "no-useless-computed-key": 2,
  "no-useless-concat": 2,
  "no-useless-constructor": 2,
  "no-useless-escape": 2,
  "no-useless-rename": 2,
  "no-useless-return": 2,
  "no-var": 2,
  "no-void": 2,
  "no-warning-comments": 2,
  "no-whitespace-before-property": 2,
  "no-with": 2,
  "nonblock-statement-body-position": 2,
  "object-curly-newline": 2,
  "object-curly-spacing": [2, "never", {
    "arraysInObjects": true,
    "objectsInObjects": true
  }],
  "object-property-newline": [2, {
    "allowAllPropertiesOnSameLine": true
  }],
  "object-shorthand": 2,
  "one-var-declaration-per-line": 2,
  "one-var": 2,
  "operator-assignment": 2,
  "operator-linebreak": 2,
  "padded-blocks": [2, {
    "blocks": "never",
    "switches": "never",
    "classes": "never"
  }],
  "padding-line-between-statements": 2,
  "prefer-arrow-callback": 2,
  "prefer-const": 2,
  "prefer-destructuring": 2,
  "prefer-numeric-literals": 2,
  "prefer-object-spread": 2,
  "prefer-promise-reject-errors": 2,
  "prefer-rest-params": 2,
  "prefer-spread": 2,
  "prefer-template": 2,
  "quote-props": [2, "consistent-as-needed", {
    "keywords": true,
    "unnecessary": true,
    "numbers": true
  }],
  "quotes": [2, "single", {
    "avoidEscape": true,
    "allowTemplateLiterals": true
  }],
  "radix": [2, "as-needed"],
  "require-atomic-updates": 2,
  "require-await": 2,
  "require-jsdoc": 2,
  "require-unicode-regexp": 2,
  "require-yield": 2,
  "rest-spread-spacing": 2,
  "semi-spacing": 2,
  "semi-style": 2,
  "semi": [2, "never", {
    "beforeStatementContinuationChars": "always"
  }],
  "sort-imports": 2,
  "sort-keys": [2, "asc", {
    "caseSensitive": true,
    "natural": true
  }],
  "sort-vars": [2, { "ignoreCase": false }],
  "space-before-blocks": 2,
  "space-before-function-paren": 2,
  "space-in-parens": 2,
  "space-infix-ops": 2,
  "space-unary-ops": 2,
  "spaced-comment": 2,
  "strict": [2, "safe"],
  "switch-colon-spacing": 2,
  "symbol-description": 2,
  "template-curly-spacing": 2,
  "template-tag-spacing": 2,
  "unicode-bom": 2,
  "use-isnan": 2,
  "valid-jsdoc": 2,
  "valid-typeof": 2,
  "vars-on-top": 2,
  "wrap-iife": 2,
  "wrap-regex": 2,
  "yield-star-spacing": 2,
  "yoda": 2
} */

/* eslint-env browser, es6, greasemonkey */

/* eslint-disable strict, func-names, prefer-arrow-callback */
(function iife (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['paths'], factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('paths'))
  } else {
    root.akk = factory(root.paths)
  }
}(typeof self === 'undefined' ? this : self, function (paths) {
  /* eslint-enable strict, func-names, prefer-arrow-callback */
  'use strict'
  const akk = {
    cfg: {
      paths,
    },
    addPathsToRequire () {
      console.log('addPathsToRequire', this)
      requirejs.config({
        paths: this.cfg.paths,
      })
    },
  }
  return akk
}))
