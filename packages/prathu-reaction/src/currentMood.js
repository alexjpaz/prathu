module.exports = (app, options = {}) => {
  // robot.brain.get("prathu-reaction.addReaction.emoji") || "";
  const { moodSupplier } = options;

  app.get('/current-mood', (req, res) => {
    res.end(`
    <html>
      <body id='prathu-reaction'>
      </body>
    </html>
  `);
  });

  app.get('/current-mood.json', (req, res) => {
    res.send({
      mood: moodSupplier()
    })
  });
};
