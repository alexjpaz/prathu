const { expect } = require('chai');

const { resolveEmoji } = require('./resolveEmoji');

describe('resolveEmoji', () => {
  it('should return url', () => {

    const url = resolveEmoji("foo", {
      foo: "http://foo.com"
    });

    expect(url).to.eql("http://foo.com");
  });

  it('should resolve alias recursivley', () => {

    const url = resolveEmoji("foo", {
      foo: "alias:bar",
      bar: "http://bar.com"
    });

    expect(url).to.eql("http://bar.com");
  });
});
