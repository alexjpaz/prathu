HubotCron = require 'hubot-cronjob'

MARS_TEAM_PRIVATE_CHANNELID='G38EK1HF0'

random = require '../utils/random.coffee'

cron = (crondef, chance, say) ->
 new HubotCron crondef, 'America/New_York', () ->
    if(random(chance))
      web = robot.adapter.client.web
      web.chat.postMessage(MARS_TEAM_PRIVATE_CHANNELID, say, {
        link_names: 1
        as_user: 1
      })

module.exports = (robot) ->

  if(robot.adapter.client)
    web = robot.adapter.client.web
  else
    robot.logger.info "Web client not found"
    return {}

  cron '0 9-17 * * 1-5', 0.05, '@here is dev down?'
  cron '0 9-17 * * 1-5', 0.05, 'docs controllo'
  cron '0 9-17 * * 1-5', 0.05, 'Can someone you look at https://jira.move.com/browse/ADVP-'+Math.floor(Math.random() * (9000 - 1000 + 1)) + 9000
  cron '0 9-17 * * 1-5', 0.05, 'corrrelation id 6fe3b18d-b24a-45b7-85f6-caec586d73de on prod'
  cron '0 9-17 * * 1-5', 0.05, 'deploying profile api to prod'
  cron '0 9-17 * * 1-5', 0.05, "Is anyone using `dashboard.tphub.moveaws.com? I'm going to delete it."
  cron '0 9-17 * * 1-5', 0.05, "fucking controllo"
  cron '0 9-17 * * 1-5', 0.05, "bees"
