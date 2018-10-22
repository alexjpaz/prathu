FROM node:8 as build
COPY . /app
WORKDIR /app
RUN chown -R node:node /app
USER node
RUN npm i
RUN npm run test
