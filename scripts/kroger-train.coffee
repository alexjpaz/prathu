HubotCron = require 'hubot-cronjob'

KROGER_TRAIN_CHANNELID='C0D9HMWSU'

CHANCE_TO_BE_DO_KROGER = 0.01
CHANCE_TO_DO_WAIT_UP = 0.01

random = require '../utils/random.coffee'

module.exports = (robot) ->
  web = robot.adapter.client.web

  new HubotCron '* 11 * * 1-5', 'America/New_York', () ->
    if(random(CHANCE_TO_BE_DO_KROGER))
      web = robot.adapter.client.web
      web.chat.postMessage(KROGER_TRAIN_CHANNELID, "@here :kroger:?", {
        link_names: 1
        as_user: 1
      })

  robot.hear /@here/, (msg) ->
    if(msg.message.room == KROGER_TRAIN_CHANNELID)
      if(random(CHANCE_TO_DO_WAIT_UP))
        setTimeout () ->
          msg.send 'Wait for me guys'
        , (10 * 60 * 1000)

