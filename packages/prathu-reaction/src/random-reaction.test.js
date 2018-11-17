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

    sinon.spy(r, "random");

    r.reaction(null, 0, 0);

    expect(r.random.calledOnce).to.be.true;
    expect(r.random.calledWith(0)).to.be.true;

    r.random.resetHistory();

    r.reaction(null, 0, 0);

    expect(r.random.calledTwice).to.be.true;
    expect(r.random.calledWith(0)).to.be.true;
  });
});
