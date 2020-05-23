(function iife (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['paths'], factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('paths'))
  } else {
    root.akk = factory(root.paths)
  }
}(typeof self === 'undefined' ? this : self, function (paths) {
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
