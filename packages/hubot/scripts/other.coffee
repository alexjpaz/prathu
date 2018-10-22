random = require '../utils/random.coffee'

module.exports = (robot) ->
  robot.hear /lazy/i, (msg) ->
    if(random(0.2))
      msg.send 'https://www.youtube.com/watch?v=zipkN3m9TCQ'

