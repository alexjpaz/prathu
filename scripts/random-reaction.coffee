random = require '../utils/random.coffee'

CHANCE_TO_REACT = 0.15

REACTIONS = [
  'thumbsup',
  'thumbsdown',
  'simple_smile',
  'disappointed'
]

getRandomReaction = () ->
  return REACTIONS[Math.floor(Math.random()*REACTIONS.length)]

module.exports = (robot) ->
  web = robot.adapter.client.web
  robot.hear /.*/, (res) ->
    console.log(res.message);
    if(random(CHANCE_TO_REACT))
      web.reactions.add(getRandomReaction(), {
        channel: res.message.room,
        timestamp: res.message.id,
      })

