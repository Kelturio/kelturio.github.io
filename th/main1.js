console.log("main1.js")
require.config({
    paths: {
        foo: 'libs/foo-1.1.3',
        'lodash'     : [
            'http://git.l5590/LibsJS/lodash.js/4.17.11/lodash.min',
            'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min',
          ]
    }
});