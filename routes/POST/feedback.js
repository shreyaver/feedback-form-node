const Joi = require('joi');
const Model = require('../../models');

module.exports = [{
  method: 'POST',
  path: '/feedback',
  config: {
    validate: {
      payload: {
        date: Joi.date(),
        rating: Joi.number(),
        liked: Joi.string(),
        toImprove: Joi.string(),
      },
    },
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request, h) => h.response(await Model.feedback.generate(request.payload)).code(200),
}];
