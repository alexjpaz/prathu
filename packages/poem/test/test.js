const poems = require('../poems');

it('poems', async () => {
  const poem = await poems.getRandomPoem();

  console.log(poem);
});
