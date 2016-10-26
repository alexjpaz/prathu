random = require '../utils/random.coffee'

USER_NAMES_ID = {
  KEL: 'U07EZV1V1'
  PAZ: 'U07EZTER2'
}

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




module.exports = (robot) ->
  if(robot.adapter.client)
    web = robot.adapter.client.web
  else
    robot.logger.info "Web client not found"
    return {}

  reaction = (robot, msg, chanceRandom, chanceNormal) ->
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

  robot.respond /(opinion|should (i|we)|do you like)/i, (msg) ->
    return
    robot.logger.info("Testing react direct")
    reaction(robot, msg, 0.3, 1.0)

  robot.hear /.*/, (msg) ->
    if msg.message.user.id == USER_NAMES_ID.KEL
      web.reactions.add('kel-cecil', {
        channel: msg.message.room,
        timestamp: msg.message.id,
      })

  robot.hear /.*/, (msg) ->
    return
    robot.logger.info("Testing react")
    robot.logger.info("Message" + JSON.stringify(msg.message))
    reaction(robot, msg, CHANCE_TO_REACT_NONSENSE, CHANCE_TO_REACT)
