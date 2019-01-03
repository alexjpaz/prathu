slack_it = (robot, res, title, text) ->
  robot.emit 'slack-attachment',
    channel: res.message.room
    content:
      title: title
      text: text
      fallback: text

module.exports = (robot) ->
  robot.hear /fast/i, (msg) ->
    robot.http('https://fa2yu62thb.execute-api.us-east-1.amazonaws.com/production/sanic')
      .get() (err, res, body) ->
        text = JSON.parse(body).text
        msg.send(text)
