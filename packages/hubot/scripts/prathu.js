module.exports = async (robot) => {
  const promises = [
    'prathu-example'
  ];

  Promise.all(plugins.map((plugin) => {
    const fn = require(plugin);

    if(typeof fn === 'function') {
      fn(robot);
    }
  }));
}
