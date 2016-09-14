ADMINS = [
  "U07EZTER2"
]

isAdminUser = (userId) ->
  return ADMINS.indexOf(userId) > -1


module.exports = (robot) ->
  robot.respond /die/, (msg) ->
    if isAdminUser(msg.message.user.id)

      msg.send "I'll be back :terminator: <http://prathu.herokuapp.com|revive>"
      setTimeout () ->
        process.exit 0
      , 500

