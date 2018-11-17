const currentMood = require('./currentMood');
const chat = require('./chat');

module.exports = (robot) => {
  const app = robot.router;

  const options = {
    moodSupplier: () => ({
      key: "foo",
      url: "http://foo.com"
    })
  };

  // TODO
  const reaction = (msg, chance_random, chance_normal) => {
  };

  currentMood(app, options);
  chat(robot, {
    reaction
  });
};
