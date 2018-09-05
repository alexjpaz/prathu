HubotCron = require 'hubot-cronjob'

random = require '../utils/random.coffee'

CHANCE_TO_BE_LATE = 0.05
CHANNEL_ID = 'G0JUTJYCV'

MESSAGES = [
    "@here Hey team - I'm going to stop at Timmy's next door. Send me your orders.",
    "@here Hey team - I'm going to be late for standup since I'm stuck in traffic. I'll try to get there as fast as I can.",
    "@here Sorry, but I will be late for standup since I got stung by some bees yesterday and it hurts to sit. Go ahead and start without me.",
    "@here Hey team I have a diaherrea tonight , please start standup without me. :freshpoop:",
]

module.exports = (robot) ->
  new HubotCron '15 9 * * 1-5', 'America/New_York', () ->
    if(random(CHANCE_TO_BE_LATE))
      web = robot.adapter.client.web
      web.chat.postMessage(CHANNEL_ID, MESSAGES[Math.floor(Math.random()*MESSAGES.length)], {
        link_names: 1
        as_user: 1
      })
