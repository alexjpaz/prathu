const { promisify } = require('util');

class RandomReactionHandler {
  constructor({ store, slackWebClient }) {
    this.store = store;
    this.slackWebClient = slackWebClient;
  }

  random(chance) {
    chance = chance || 0.5;
    return (Math.random() < chance ? 0 : 1);
  }

  reaction(msg, chanceRandom, chanceNormal) {
    if(this.random(chanceRandom)) {
      // React with a random emoji
      this.reactionRandom(msg);
      return;
    }

    if(this.random(chanceNormal)) {
      this.reactionNormal(msg);
      // React with a normal emoji
      return;
    }
  }

  reactionNormal(msg) {
    const REACTIONS = [
      'thumbsup',
      'thumbsdown',
      'simple_smile',
      'disappointed'
    ];

    const getRandomReaction = () => REACTIONS[Math.floor(Math.random()*REACTIONS.length)];

    const emoji = getRandomReaction();

    return this.addReaction(emoji, msg.message.room, msg.message.id);
  }

  async reactionRandom(msg) {
    const resp = await this.slackWebClient.emoji.list();

    const emoji = msg.random(Object.keys(resp.emoji));

    this.addReaction(emoji, msg.message.room, msg.message.id);
  }

  addReaction(emoji, channel, timestamp) {
    this.store.set("prathu-reaction.addReaction.emoji", emoji);

    this.slackWebClient.reactions.add(emoji, {
      channel,
      timestamp
    });
  }
}

module.exports = {
  RandomReactionHandler
};


const f = () => {
  return new RandomReactionHandler(options);



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

  // TODO
  return {
    setCurrentMood,
    addReaction,
    reaction
  };
};
