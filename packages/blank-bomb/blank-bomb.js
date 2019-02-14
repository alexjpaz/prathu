module.exports = (robot) => {
  robot.hear(/blank bomb ([0-9]+)/i, (res) => {
    const times = res.match[1] || 10;
    let bomb = "";

    for(var i=0;i<times;i++) {
      bomb += ":blank:"
      bomb += "\n";
    }

    res.send(bomb);
  });
};
