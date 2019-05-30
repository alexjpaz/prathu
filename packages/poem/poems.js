const request = require('superagent');

let urls = null; // cache

const getRandomPoem = async () => {

  if(urls === null) {
    const { body } = await request
      .get('https://www.reddit.com/r/ilikthebred/top.json?t=all&limit=1000')
      .set('User-Agent', 'Linux:com.alexjpaz.prathu:v1.0.1 (by /u/alexjpaz)')
    ;

    urls = body.data.children
      .filter(c => c)
      .filter(c => c.data)
      .filter(c => c.data.url)
      .map(c => c.data.url)
      .filter(url => url.endsWith('.jpg')) || []
    ;

    setTimeout(() => {
      urls = null
    }, 5 * (60 * 1000));
  }

  var poem = urls[Math.floor(Math.random()*urls.length)]

  return poem;
};

module.exports = {
  getRandomPoem
};
