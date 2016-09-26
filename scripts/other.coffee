random = require '../utils/random.coffee'

module.exports = (robot) ->
  robot.hear /.*lazy.*/, (msg) ->
    if(random(0.2))
      msg.send 'https://www.youtube.com/watch?v=zipkN3m9TCQ'

