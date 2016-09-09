module.exports = (chance) ->
  chance = chance || 0.5;
  return (Math.random() < chance ? 0 : 1)
