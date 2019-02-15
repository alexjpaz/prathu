
RTM_EVENTS = require('@slack/client').RTM_EVENTS

module.exports = (robot) ->
  if(robot.adapter.client)
    rtm = robot.adapter.client.rtm
    web = robot.adapter.client.web
  else
    robot.logger.info "Client not found"
    return {}

  rtm.on RTM_EVENTS.REACTION_ADDED, (reaction) ->
    if reaction.reaction == 'mute'
      web.chat.delete reaction.item.ts, reaction.item.channel
