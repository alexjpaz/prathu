const { assert } = require('chai');

const sinon = require('sinon');

const randomReaction = require('./random-reaction');

xdescribe('random-reaction', () => {
  it('should add hear/respond', () => {
    const robot = {
      respond: sinon.spy(),
      hear: sinon.spy(),
      adapter: {
        client: {
          web: {}
        }
      }
    };

    randomReaction(robot);

    assert.isOk(robot.respond.called);
    assert.isOk(robot.hear.called);
  });

  xit('should react', () => {
    const robot = {
      respond: sinon.spy(),
      hear: sinon.spy(),
      adapter: {
        client: {
          web: {
            emoji: {
              list: sinon.stub().yields(null, {
                emoji: {
                  foo: "bar"
                }
              })
            }
          }
        }
      }
    };

    const ex = randomReaction(robot);

    sinon.spy(ex.addReaction);

    ex.reaction(robot, {}, 0, 1);

    assert.isOk(robot.adapter.client.web.emoji.list.called);
  });

});
