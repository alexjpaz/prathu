module.exports = (robot) => {
  robot.router.get("/", (req, res) => {
    res.send(`
    <img src='https://media1.tenor.com/images/36bcb1f7221ba62a8eeb17444a8e9e97/tenor.gif?itemid=5319793' />
    `);
  });

  robot.router.post("/say/:room", (req, res) => {
    const room = req.params.room

    const message = req.body.message;

    robot.messageRoom(room, message);

    return res.send(201);
  });
};
