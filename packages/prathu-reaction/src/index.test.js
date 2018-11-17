const plugin = require('./');
const sinon = require('sinon');

const { expect, assert } = require('chai');

describe('index', () => {
  it('plugin', () => {
    const robot = {
      hear: sinon.spy(),
      respond: sinon.spy(),
      router: {
        get: sinon.spy(),
      }
    };

    plugin(robot);

    expect(robot.router.get.called).to.eql(true);
    expect(robot.router.get.callCount).to.eql(2);

    assert(robot.hear.called, "robot.hear should be called");
    assert(robot.respond.called, "robot.respond should be called");
  });
});
