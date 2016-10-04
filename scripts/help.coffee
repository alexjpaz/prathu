request = require 'superagent'

random = require '../utils/random.coffee'

DIRECT_RESPONSES = [
  '`._.`',
  '`¯\\_(ツ)_/¯`',
  'Let me get back to you on that',
];

QUESTION_RESPONSES = [
  "I found this  ",
  "I remember finding an article on about this very thing ",
  "Maybe this can help ",
]

MARS_TEAM_PRIVATE_CHANNEL_ID='G0JUTJYCV'

respondWithArticle = (msg) ->
  request.get('https://api.stackexchange.com/2.2/questions?pagesize=100&order=desc&sort=activity&site=stackoverflow')
    .end (err, rsp) ->
      body = rsp.body
      item = msg.random body.items
      text = msg.random QUESTION_RESPONSES
      msg.send text+item.link



module.exports = (robot) ->
  robot.respond /(help|what do you know|what can you tell me about|do you have|tips|advice)/i, (msg) ->
    respondWithArticle(msg)
