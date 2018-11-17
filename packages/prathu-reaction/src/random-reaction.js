const random = (chance) => {
  chance = chance || 0.5;
  return (Math.random() < chance ? 0 : 1);
};

const CHANCE_TO_REACT = 0.15;
const CHANCE_TO_REACT_NONSENSE = 0.05;

const REACTIONS = [
  'thumbsup',
  'thumbsdown',
  'simple_smile',
  'disappointed'
];

const getRandomReaction = () => REACTIONS[Math.floor(Math.random()*REACTIONS.length)];

module.exports = function(robot) {
  let web;

  if(robot.adapter.client) {
    ({ web } = robot.adapter.client);
  } else {
    robot.logger.info("Web client not found");
    return {};
  }

  const addReaction = (emoji, channel, timestamp) => {
    web.reactions.add(emoji, {
      channel: msg.message.room,
      timestamp: msg.message.id,
    });

    robot.brain.set("prathu-reaction.addReaction.emoji", emoji);
  };

  const reaction = function(robot, msg, chanceRandom, chanceNormal) {
    if(random(chanceRandom)) {
      return web.emoji.list(function(err, resp) {
        const emoji = msg.random(Object.keys(resp.emoji));

        addReaction(emoji, msg.message.room, msg.message.id);
        return;
      });
    } else if(random(chanceNormal)) {
      const emoji = getRandomReaction();
      addReaction(emoji, msg.message.room, msg.message.id);
      return;
    }
  };

  robot.respond(/.*(opinion|should (i|we)|do you like|you feel).*/i, (msg) => {
    reaction(robot, msg, 0.3, 1.0);
  });

  robot.hear(/.*/, function(msg) {
    robot.logger.info("Testing react");
    robot.logger.info(`Message${JSON.stringify(msg.message)}`);
    return reaction(robot, msg, CHANCE_TO_REACT_NONSENSE, CHANCE_TO_REACT);
  });

  // TODO
  return {
    setCurrentMood,
    addReaction,
    reaction
  };
};
