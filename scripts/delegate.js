const request = require('superagent');

module.exports = (robot) => {
  const url = 'https://fa2yu62thb.execute-api.us-east-1.amazonaws.com/production/slack';

 robot.hear(/.*/im, (msg)  => {
   request.post(url).send({
     evelope: msg.envelope
   }).then((rsp) => {
     if(rsp.body) {
       if(rsp.body.message) {
         msg.send(rsp.body.message)
       }
     }
   }).catch((error) => {
   });
 });
};


