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

  currentMood(app, options);
  chat(robot);
};
