const Joi = require('joi');
const Model = require('../../models');

module.exports = [{
  method: 'GET',
  path: '/feedback',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request, h) => h.response(await Model.feedback.getFeedback()).code(200),
}];
