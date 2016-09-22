random = require '../utils/random.coffee'

CHANCE_TO_REACT = 0.10
CHANCE_TO_REACT_NONSENSE = 0.05

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
  robot.hear /.*/, (msg) ->

    if(random(CHANCE_TO_REACT_NONSENSE))
      web.emoji.list (err, resp) ->
        emoji = msg.random Object.keys(resp.emoji)
        web.reactions.add(emoji, {
          channel: msg.message.room,
          timestamp: msg.message.id,
        })

    if(random(CHANCE_TO_REACT))
      setTimeout () ->
        web.reactions.add(getRandomReaction(), {
          channel: msg.message.room,
          timestamp: msg.message.id,
        })
      , 500

