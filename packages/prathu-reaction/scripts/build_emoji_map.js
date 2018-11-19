  // https://github.com/aaronpk/Slack-IRC-Gateway/blob/master/emoji.js
//
const superagent = require('superagent');
const punycode = require('punycode');
const fs = require('fs');

const start = async () => {
  const { text } = await superagent.get("https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji_pretty.json");

  const emoji_pretty = JSON.parse(text);

  const convertIt = (ed) => {
    let points = ed.unified.split("-");
    points = points.map(function(p){ return parseInt(p, 16) });
    return punycode.ucs2.encode(points);
  };


  const mapped = emoji_pretty.reduce((p, c) => {
    c.short_names.forEach((n) => {
      p[n] = convertIt(c)
    });

    return p;
  }, {});

  console.log(JSON.stringify(mapped,null,2));

  fs.writeFileSync(__dirname+'/src/emojiMap.js', `// Generated ${new Date().toString()} \nmodule.exports = ${JSON.stringify(mapped, null,2)};`)
};

start()

