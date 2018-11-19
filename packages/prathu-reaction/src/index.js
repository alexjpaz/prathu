const currentMood = require('./currentMood');
const chat = require('./chat');
const { RandomReactionHandler } = require('./random-reaction');

module.exports = (robot) => {
  if(!robot.adapter.client.web) {
    robot.logger.error("Slack web client not found. Not loading prathu-reaction plugin")

    return;
  }

  const app = robot.router;

  const options = {
    moodSupplier: () => ({
      key: "foo",
      url: "http://foo.com"
    })
  };

  const randomReactionHandler = new RandomReactionHandler({
    slackWebClient: robot.adapter.client.web,
    store: robot.brain
  });

  const reaction = (msg, chance_random, chance_normal) => {
    randomReactionHandler.reaction(msg, chance_random, chance_normal);
  };

  currentMood(app, options);
  chat(robot, {
    reaction
  });
};
