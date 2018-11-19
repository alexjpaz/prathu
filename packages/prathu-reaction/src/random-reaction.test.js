const { expect } = require('chai');

const sinon = require('sinon');

const { RandomReactionHandler } = require('./random-reaction');

describe('random-reaction', () => {
  it('should update store and add reaction', () => {
    const slackWebClient = { };
    slackWebClient.reactions = { };
    slackWebClient.reactions.add = sinon.stub();

    const store = {
      set: sinon.stub()
    };

    const r = new RandomReactionHandler({
      store,
      slackWebClient
    });

    r.addReaction("foo", "bar", "123");

    expect(store.set.called).to.be.true;
    expect(store.set.calledWith("prathu-reaction.addReaction.emoji", "foo")).to.be.true;

    expect(slackWebClient.reactions.add.called).to.be.true;
    expect(slackWebClient.reactions.add.calledWith("foo", {
      channel: "bar",
      timestamp: "123"
    })).to.be.true;
  });

  it('should do random', () => {
    const r = new RandomReactionHandler({
    });

    const boolean = r.random(1);

    expect(typeof boolean).to.eql('number');
    expect(boolean === 0 || boolean === 1).to.eql(true);

  });

  it('reaction should call random', () => {
    const r = new RandomReactionHandler({});

    r.reactionNormal = sinon.spy();
    r.reactionRandom = sinon.spy();

    r.random = sinon.spy(v => v);

    r.reaction(null, 1, 0);

    expect(r.random.calledOnce).to.be.true;
    expect(r.random.calledWith(1)).to.be.true;
    expect(r.reactionRandom.called).to.be.true;
    expect(r.reactionNormal.called).to.be.false;

    r.reactionNormal = sinon.spy();
    r.reactionRandom = sinon.spy();

    r.random = sinon.spy(v => v);

    r.reaction(null, 0, 1);

    expect(r.random.calledTwice).to.be.true;
    expect(r.random.calledWith(0)).to.be.true;
    expect(r.reactionNormal.called).to.be.true;
    expect(r.reactionRandom.called).to.be.false;
  });

  it('shouold react with a normal emoji', () => {
    const r = new RandomReactionHandler({ });

    r.addReaction = sinon.stub();

    const msg = {
      message: {
        room: "1",
        id: "2"
      }
    };

    r.reactionNormal(msg);

    expect(r.addReaction.called).to.be.true;
    expect(r.addReaction.calledWith(sinon.match.any, msg.message.room, msg.message.id)).to.be.true;
  });

  it('shouold react with a random emoji', async () => {
    const list = sinon.spy(() => {
      return {
        emoji: {
          foo: "bar"
        }
      }
    });

    const slackWebClient = {
      emoji: {
        list
      }
    };

    const r = new RandomReactionHandler({
      slackWebClient
    });

    r.addReaction = sinon.stub();

    const msg = {
      random: (v) => v[0],
      message: {
        room: "1",
        id: "2"
      }
    };

    await r.reactionRandom(msg);

    expect(list.called).to.be.true;

    expect(r.addReaction.called).to.be.true;
    expect(r.addReaction.called).to.be.true;
    expect(r.addReaction.calledWith('foo', msg.message.room, msg.message.id)).to.be.true;
  });
});
