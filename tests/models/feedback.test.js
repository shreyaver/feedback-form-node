const Model = require('../../models');

beforeEach(async () => {
  await Model.feedback.truncate();
});
describe('feedback.generate()', () => {
  it('should insert new feedback', async () => {
    const feedbackObj = {
      date: new Date(),
      rating: 1,
      liked: 'abc',
      toImprove: 'def',
    };
    expect(await Model.feedback.generate(feedbackObj)).toEqual('Inserted feedback');
  });
});
// describe('feedback.getFeedback()', () => {
//   it('should get feedback', async () => {
//     const feedbackObj1 = {
//       date: new Date(),
//       rating: 1,
//       liked: 'abc',
//       toImprove: 'def',
//     };
//     const feedbackObj2 = {
//       date: new Date(),
//       rating: 3,
//       liked: 'hello',
//       toImprove: 'bye',
//     };
//     const feedbackObj3 = {
//       date: new Date(),
//       rating: '1',
//       liked: 'abc',
//       toImprove: 'def',
//     };
//     const feedbackObj4 = {
//       date: new Date(),
//       rating: '3',
//       liked: 'hello',
//       toImprove: 'bye',
//     };
//     await Model.feedback.generate(feedbackObj1);
//     await Model.feedback.generate(feedbackObj2);
//     expect(await Model.feedback.getFeedback()).toEqual([feedbackObj3, feedbackObj4]);
//   });
// });
afterAll(() => Model.feedback.sequelize.close());
