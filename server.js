const Hapi = require('hapi');
const pingRoute = require('./routes/GET/ping.js');
const getFeedbackRoute = require('./routes/GET/feedback.js');
const postFeedbackRoute = require('./routes/POST/feedback');

const server = new Hapi.Server({
  port: 8080,
  host: 'http://13.232.122.248',
});

server.route([...pingRoute, ...getFeedbackRoute, ...postFeedbackRoute]);
if (!module.parent) {
  server.start();
}

module.exports = { server };
