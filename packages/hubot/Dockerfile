FROM alexjpaz/hubot-slack:v0.0.0-alpha2

ADD package.json package.json
RUN npm install

ADD hubot-scripts.json /hubot/

ADD external-scripts.json /hubot/

ADD scripts/ /hubot/scripts/

ADD utils/ /hubot/utils/

ADD test/ /hubot/test
RUN npm test

RUN bin/hubot -t

USER    root
RUN chown -R hubot:hubot /hubot/scripts/*
USER    hubot
