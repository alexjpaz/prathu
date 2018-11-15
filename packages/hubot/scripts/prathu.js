const pkg = require('../package.json');

module.exports = async (robot) => {
  const plugins = Object.keys(pkg.dependencies)
    .filter(p => p.startsWith('prathu-'));

  Promise.all(plugins.map((plugin) => {
    console.log('loading ' + plugin);
    const fn = require(plugin);

    if(typeof fn === 'function') {
      fn(robot);
    }
  }));
}
