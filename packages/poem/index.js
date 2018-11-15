const { getRandomPoem } = require('./poems');

module.exports = (robot) => {
  const respond = async (msg) => {
    const poem = await getRandomPoem();
    msg.send(poem);
  };

  [
    /i lik the bred/i,
  ].map((regex) => {
    robot.hear(regex, respond);
  });

  [
    /poem/i,
  ].map((regex) => {
    robot.hear(regex, respond);
  });
};
