'use strict';
module.exports = (sequelize, DataTypes) => {
  const feedback = sequelize.define('feedback', {
    date: DataTypes.DATE,
    rating: DataTypes.DECIMAL(10, 0),
    liked: DataTypes.STRING,
    toImprove: DataTypes.STRING,
  }, {});
  feedback.generate = async (feedbackObj) => {
    try {
      await feedback.create(feedbackObj);
      return 'Inserted feedback';
    } catch (errorObj) {
      return errorObj.message;
    }
  };
  feedback.getFeedback = async () => {
    try {
      const responses = await feedback.findAll({ attributes: ['date', 'rating', 'liked', 'toImprove'] });
      return responses;
    } catch (errorObj) {
      return errorObj.message;
    }
  };
  return feedback;
};
