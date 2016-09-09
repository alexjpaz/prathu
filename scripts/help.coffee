request = require 'superagent'

RESPONSES = [
  "I found this  ",
  "I remember finding an article on about this very thing ",
  "Maybe this can help ",
]

module.exports = (robot) ->
  robot.respond /.*(help|what do you know|what can you tell me about|do you have).*/i, (msg) ->
    request.get('https://api.stackexchange.com/2.2/questions?pagesize=100&order=desc&sort=activity&site=stackoverflow')
      .end (err, rsp) ->
        body = rsp.body
        item = msg.random body.items
        text = msg.random RESPONSES

        msg.send text+item.link

