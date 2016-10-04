random = require '../utils/random.coffee'

CHANCE_TO_REACT = 0.15
CHANCE_TO_REACT_NONSENSE = 0.05

REACTIONS = [
  'thumbsup',
  'thumbsdown',
  'simple_smile',
  'disappointed'
]

getRandomReaction = () ->
  return REACTIONS[Math.floor(Math.random()*REACTIONS.length)]

reaction = (chanceRandom, chanceNormal) ->
  if(random(chanceRandom))
    web.emoji.list (err, resp) ->
      emoji = msg.random Object.keys(resp.emoji)
      web.reactions.add(emoji, {
        channel: msg.message.room,
        timestamp: msg.message.id,
      })

  else if(random(chanceNormal))
    web.reactions.add(getRandomReaction(), {
      channel: msg.message.room,
      timestamp: msg.message.id,
    })


module.exports = (robot) ->
  web = robot.adapter.client.web

  robot.respond /(opinion|should (i|we)|do you like)/i, (msg) ->
    reaction(0.3, 1.0)

  robot.hear /.*/, (msg) ->
    reaction(CHANCE_TO_REACT_NONSENSE, CHANCE_TO_REACT)
