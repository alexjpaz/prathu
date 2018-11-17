module.exports = (app, options = {}) => {
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
