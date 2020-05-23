(function iife (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.paths = factory()
  }
}(typeof self === 'undefined' ? this : self, function () {
  'use strict'
  const paths = {
    'blueimp-md5': [
      'https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.10.0/js/md5.min',
    ],
    'localforage': [
      'https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min',
    ],
    'lodash'     : [
      'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min',
    ],
    'ramda'      : [
      'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.25.0/ramda.min',
    ],
    'sugar'      : [
      'https://cdnjs.cloudflare.com/ajax/libs/sugar/2.0.4/sugar.min',
    ],
  }
  return paths
}))
