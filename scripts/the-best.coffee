intervalIds = []

slack_web = robot.adapter.client.web

module.exports = (robot) ->
  robot.hear /is someone getting the best/i, (res) ->
    intervalId = setInterval(() ->
      res.send "the best"
    , 1500)
    intervalIds.push(intervalId)

  robot.hear /of you/, (res) ->
    intervalIds.forEach (id) ->
      clearInterval(id)
    intervalIds = []
