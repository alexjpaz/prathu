module.exports = (robot, options) => {
  const { reaction } = options;

  robot.respond(/.*(opinion|should (i|we)|do you like|you feel).*/i, (msg) => {
    reaction(msg.message, 0.3, 1.0);
  });

  robot.hear(/.*/, function(msg) {
    const CHANCE_TO_REACT = 0.15;
    const CHANCE_TO_REACT_NONSENSE = 0.05;
    reaction(msg.message, CHANCE_TO_REACT_NONSENSE, CHANCE_TO_REACT);
  });
};
