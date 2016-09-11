HubotCron = require 'hubot-cronjob'

random = require '../utils/random.coffee'

CHANCE_TO_BE_LATE = 0.15
CHANNEL_ID = 'G0JUTJYCV'

module.exports = (robot) ->
  robot.router.get '/api/standup', (req, res) ->
    if(random(CHANCE_TO_BE_LATE))
      web = robot.adapter.client.web
      web.chat.postMessage(CHANNEL_ID, "@here I'm running a bit behind please start standup without me.", {
        link_names: 1
        as_user: 1
      })
