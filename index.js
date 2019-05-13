'use strict';

const funnel = require('broccoli-funnel');
const { map } = require('broccoli-stew');

module.exports = {
  name: require('./package').name,

  urlsForPrember() {
    return ['/'];
  },

  treeForVendor() {
    let revealLibFiles = funnel('node_modules/reveal.js/', {
      files: [
        'js/reveal.js',
        'plugin/markdown/marked.js',
        'plugin/markdown/markdown.js',
      ]
    });

    revealLibFiles = map(revealLibFiles, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    return revealLibFiles;
  },

  included(app) {
    this._super.included.apply(this, arguments);

    if(!app.options.fingerprint) {
      app.options.fingerprint = {
        exclude: ['plugin/*/*.js']
      }
    }

    // this file will be loaded in FastBoot but will not be eval'd
    this.import('vendor/js/reveal.js');
    this.import('vendor/plugin/markdown/marked.js');
    this.import('vendor/plugin/markdown/markdown.js');

    app.import('node_modules/reveal.js/css/reset.css');
    app.import('node_modules/reveal.js/css/reveal.css');
    app.import('node_modules/reveal.js/css/theme/beige.css')
  },

  treeForPublic() {
    return funnel('node_modules/reveal.js/plugin/', {
      destDir: 'plugin'
    });
  }
};
