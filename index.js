'use strict';

const funnel = require('broccoli-funnel');
const { map } = require('broccoli-stew');

module.exports = {
  name: require('./package').name,

  urlsForPrember() {
    return ['/'];
  },

  included(app) {
    this._super.included.apply(this, arguments);

    if (!app.options.fingerprint) {
      app.options.fingerprint = {
        exclude: ['plugin/*/*.js'],
      };
    } else {
      app.options.fingerprint.exclude = app.options.fingerprint.exclude || [];

      app.options.fingerprint.exclude.push('plugin/*/*.js');
    }

    let revealOptions = this.options.reveal || {};

    this.import('node_modules/reveal.js/dist/reveal.css');
    this.import(
      `node_modules/reveal.js/plugin/highlight/${revealOptions.highlightTheme || 'monokai'}.css`
    );
  },

  contentFor: function(type){
    if (type === 'head'){
      return `<link rel='stylesheet' types='text/css' href='https://fonts.googleapis.com/css?family=Nunito+Sans:300,700'>`;
    }
  },

  treeForPublic(tree) {
    let revealPlugins = funnel(join(dirname(require.resolve('reveal.js')), '..', 'plugin'), {
      destDir: 'plugin',
    });

    return mergeTrees([tree, revealPlugins]);
  },
};
