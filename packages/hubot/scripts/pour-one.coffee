# Description:
#   The best way to pour one out
#
# Commands:
#   hubot pour one out for <name> - Pours out a 40 for those that are lost

module.exports = (robot) ->
  robot.respond /pour one out for (.*)$/i, (msg) ->
    msg.send "http://pour-one-out.herokuapp.com/api?" + encodeURIComponent(msg.match[1]) + "#.gif"
