const resolveEmoji = (key, emojis) => {
  let url = emojis[key];

  if(!url) {
    return key;
  }

  if(url.startsWith('alias:')) {
    key = url.replace('alias:','');
    return resolveEmoji(key, emojis);
  }

  return url;
};

module.exports = {
  resolveEmoji
};
