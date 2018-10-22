module.exports = (robot) ->
  robot.hear /┻━┻/, (msg) ->
    msg.send "┬─┬ノ( º _ ºノ)"
  
  robot.hear /┬─┬/, (msg) ->
    msg.send "(╯°□°)╯︵ ┻━┻"
