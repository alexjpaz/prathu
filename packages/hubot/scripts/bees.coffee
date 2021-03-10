slack_it = (robot, res, title, text) ->
  robot.emit 'slack-attachment',
    channel: res.message.room
    content:
      title: title
      text: text
      fallback: text

module.exports = (robot) ->
  robot.hear /bees/i, (msg) ->
    robot.http('https://g4vlcenksd.execute-api.us-east-1.amazonaws.com/prod/bees')
      .post() (err, res, body) ->
        text = JSON.parse(body).text
        msg.send(text)
