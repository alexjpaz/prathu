module.exports = (robot) ->
  [
    /y fren/i,
    /y friend/i,
    /why friend/i,
    /halp/i,
    /(\W|^)heck\W/i,
    /doggo/i,
    /^heck$/i,
    /send halp pls/i,
    /stop it fren/,
    /doing me a concern/,
    /blep/,
    /^heck off$/i,
    /^bork/i,
    /^borf/i,
    /^bjork/i,
    /frighten/i,
    /supplying me with anxiety/i,
    /a bother/i,
    /stucc/i,
    /frigg/i,
    /spook/i
  ].map (regex) ->
    robot.hear regex, (msg) ->
      robot.http('https://fa2yu62thb.execute-api.us-east-1.amazonaws.com/production/heck')
        .get() (err, res, body) ->
          text = JSON.parse(body).text
          msg.send(text)
