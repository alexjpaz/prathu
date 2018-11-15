const poems = require('./poems');

module.exports = (robot) => {
  function getRandomPoem() {
    return poems[Math.floor(Math.random()*poems.length)];
  }
  [
    /i lik the bred/i,
  ].map((regex) => {
    robot.hear(regex, (msg) => {
      const poem = getRandomPoem();
      msg.send(poem);
    });
  });

  [
    /poem/i,
  ].map((regex) => {
    robot.hear(regex, (msg) => {
      const poem = getRandomPoem();
      msg.send(poem);
    });
  });
};
