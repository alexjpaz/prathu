module.exports = (robot) ->
  robot.hear /┻━┻/u, (msg) ->
    msg.send "┬─┬ノ( º _ ºノ)"
  
  robot.hear /┬─┬/u, (msg) ->
    msg.send "(╯°□°)╯︵ ┻━┻"
