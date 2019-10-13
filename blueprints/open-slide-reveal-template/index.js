'use strict';
const recast = require('recast');

const { types: { builders } } = recast;

const { readFileSync, writeFileSync } = require('fs');

module.exports = {
  description: 'Default blueprint for open-slide-simplabs-template',

  normalizeEntityName() {
    // no-op
  },

  afterInstall() {
    let configFile = './config/environment.js'

    if(this.project.isEmberCLIAddon()) {
      configFile = './tests/dummy/config/environment.js';
    }

    const config = readFileSync(configFile);
    const configAst = recast.parse(config);

    recast.visit(configAst, {
      visitVariableDeclaration: function (path) {
        var node = path.node;

        const env = node.declarations.find(declaration => declaration.id.name === 'ENV');

        if (env) {
          let locationType = env.init.properties.find(property => property.key.name === 'locationType');

          locationType.value = builders.literal('preserve-hash');

          return false;
        }

        this.traverse(path);
      }
    });

    writeFileSync(configFile, recast.print(configAst, { tabWidth: 2, quote: 'single' }).code);
  }
};
