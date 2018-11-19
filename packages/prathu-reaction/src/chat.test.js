const chat = require('./chat');
const sinon = require('sinon');

const { expect, assert } = require('chai');

let robot;
describe('chat', () => {
  beforeEach(() => {
    robot = {};
    robot.respond = sinon.spy();
    robot.hear = sinon.spy();
  });

  it('should call respond', () => {
    const reaction = sinon.stub();

    chat(robot, {
      reaction
    });

    const respondCall = robot.respond.getCalls()[0];

    const callback = respondCall.args[1];

    const msg = { message: "foo" };

    callback(msg);

    expect(reaction.called).to.be.true;
    expect(reaction.withArgs(msg, sinon.match.any, sinon.match.any).called).to.be.true;
  });

  it('should call hear', () => {
    const reaction = sinon.stub();

    chat(robot, {
      reaction
    });

    const respondCall = robot.hear.getCalls()[0];

    const callback = respondCall.args[1];

    const msg = { message: "foo" };

    callback(msg);

    expect(reaction.called).to.be.true;
    expect(reaction.withArgs(msg, sinon.match.any, sinon.match.any).called).to.be.true;
  });
});

