HubotCron = require 'hubot-cronjob'

random = require '../utils/random.coffee'

CHANCE_TO_BE_LATE = 0.1
CHANNEL_ID = 'C09QS3HDX'

module.exports = (robot) ->
  new HubotCron '15 9 * * 1-5', 'America/New_York', () ->
    if(random(CHANCE_TO_BE_LATE))
      web = robot.adapter.client.web
      web.chat.postMessage(CHANNEL_ID, "@here Hey team I have a diaherrea tonight , please start standup without me. :freshpoop: ", {
        link_names: 1
        as_user: 1
      })
