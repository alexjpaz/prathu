module.exports = (robot) ->
  [
    /controllo is (broken|down)/i,
  ].map (regex) ->
    robot.hear regex, (msg) ->
      rage = [
        ':rageguy-fffffffuuuuuuuuuu:',
        ':cryingpig:'

      ]
      msg.send msg.random rage

