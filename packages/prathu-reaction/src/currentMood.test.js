const { expect } = require('chai');
const sinon = require('sinon');
const supertest = require('supertest');
const express = require('express');

const currentMood = require('./currentMood');

describe('currentMood', () => {
  let app = express();
  let request;

  beforeEach(() => {
    currentMood(app);
    request = supertest(app);
  });

  it('should display html', async () => {
    await request.get('/plugin/reaction/current-mood')
      .expect(200, /prathu-reaction/)
  });

  it('should get current mood via json', async () => {
    let app = express();

    const mood = {
      key: "foo",
      url: "http://foo.com"
    };

    const moodSupplier = sinon.stub().returns(mood);

    currentMood(app, {
      moodSupplier
    });

    let request = supertest(app);

    await request.get('/plugin/reaction/current-mood.json')
      .expect(200, {
        mood
      })
  });
});
