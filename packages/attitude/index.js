const APPROVED_ROOMS = [
  'G07P2036H', // #shake-weight
];

module.exports = (robot) => {
  robot.logger.info("Adjusting Prathu's attitude");
  robot.receiveMiddleware((context, next, done) => {
    const room = context.response.message.room;

    if(APPROVED_ROOMS.includes(room)) {
      return next(done);
    }

    robot.logger.info(`Prathu is not in an approved room. He will not respond. room=${room}`);
    return done();
  });
};
