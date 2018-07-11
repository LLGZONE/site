const ModuleFilenameHelpers = require('webpack/lib/ModuleFilenameHelpers');
const defaultConfig = {
  test: /\.jsx?/,
  exclude: [/common\.bundle\.js/, /localize\.js/],
  output: 'config/trans-key.json'
};
function isInitialOrHasNoParents(chunk) {
  let parentCount = 0;

  for (const chunkGroup of chunk.groupsIterable) {
    parentCount += chunkGroup.getNumberOfParents();
  }

  return chunk.isOnlyInitial() || parentCount === 0;
}
function getEntries(chunk) {
  if (isInitialOrHasNoParents(chunk)) {
    return [chunk.name]; // 根路由
  }
  let entries = [];
  for (const chunkGroup of chunk.groupsIterable) {
    for (const parent of chunkGroup.getParents()) {
      for (const item of parent.chunks) {
        entries = [...new Set([...entries, ...getEntries(item)])];
      }
    }
  }
  return entries;
}
class ExtractKeysPlugin {
  constructor(config) {
    this.keyMap = {};
    this.config = Object.assign({}, defaultConfig, config);
  }
  apply(compiler) {
    compiler.plugin('compilation', compilation => {
      compilation.plugin('optimize-chunk-assets', (chunks, callback) => {
        this.keyMap = {};
        for (const chunk of Array.from(chunks)) {
          for (const file of chunk.files) {
            if (!ModuleFilenameHelpers.matchObject(defaultConfig, file)) {
              continue;
            }
            /*
            const asset = compilation.assets[file];
            const code = asset.source();
            let match = null;
            */

            const entries = getEntries(chunk);
            entries.forEach(entry => {
              if (!this.keyMap[entry]) {
                this.keyMap[entry] = {};
              }
            });
          }
        }
        callback();
      });
    });
  }
}
module.exports = ExtractKeysPlugin;
