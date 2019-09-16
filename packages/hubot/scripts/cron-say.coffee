HubotCron = require 'hubot-cronjob'

MARS_TEAM_PRIVATE_CHANNELID='G0JUTJYCV'

random = require '../utils/random.coffee'

module.exports = (robot) ->
  cron = (crondef, chance, say) ->
   new HubotCron crondef, 'America/New_York', () ->
      if(random(chance))
        web = robot.adapter.client.web
        web.chat.postMessage(MARS_TEAM_PRIVATE_CHANNELID, say, {
          link_names: 1
          as_user: 1
        })

  cron '15 9 * * 1-5', 0.01, '@here is dev down?'
  cron '15 9 * * 1-5', 0.01, 'docs controllo'
  cron '15 9 * * 1-5', 0.01, 'Can someone you look at https://jira.move.com/browse/DASH-'+Math.floor(Math.random() * (9000 - 1000 + 1))
  cron '15 9 * * 1-5', 0.01, 'corrrelation id 6fe3b18d-b24a-45b7-85f6-caec586d73de on prod'
  cron '15 9 * * 1-5', 0.01, 'deploying profile api to prod'
  cron '15 9 * * 1-5', 0.01, "Is anyone using `dashboard.tphub.moveaws.com? I'm going to delete it."
  cron '15 9 * * 1-5', 0.01, "fucking controllo"
  cron '15 9 * * 1-5', 0.01, "https://soundboard.alexjpaz.com/surprise_motherfucker"
  cron '15 9 * * 1-5', 0.01, "https://soundboard.alexjpaz.com/system-working"
  cron '15 9 * * 1-5', 0.01, "https://alexjpaz.com/and-his-name-is/Prathu"
  cron '15 9 * * 1-5', 0.01, "https://alexjpaz.com/everyday/test%20in%20production"
  
  
