  // https://github.com/aaronpk/Slack-IRC-Gateway/blob/master/emoji.js
//
const superagent = require('superagent');
const punycode = require('punycode');
const fs = require('fs');

const slack_to_unicode = function(text, emoji_data) {

  var emoji_re = /\:([a-zA-Z0-9\-_\+]+)\:(?:\:([a-zA-Z0-9\-_\+]+)\:)?/g;

  var new_text = text;

  // Find all Slack emoji in the message
  while(match=emoji_re.exec(text)) {
    var ed = emoji_data.find(function(el){
      return el.short_name == match[1];
    });
    if(ed) {
      var points = ed.unified.split("-");
      points = points.map((p) => parseInt(p, 16));
      new_text = new_text.replace(match[0], punycode.ucs2.encode(points));
    }
  }

  return new_text;
}

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

