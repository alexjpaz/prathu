const heck = require('../scripts/heck.coffee');

const { assert } = require('chai');
const { stub } = require('sinon');

it('should respond to "heck"', () => {
  const robot = {
    hear: stub(),
    http: stub()
  };

  heck(robot);

  assert(robot.hear.called, "hear should have been called");
  assert(robot.hear.calledWith(/halp/i));

  const respond = robot.hear.calls[0];

  console.log(respond);

});
