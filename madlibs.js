const ejs = require('ejs');

const generate = (obj) => {
  const template = ejs.compile(obj.text);
  const result = template(obj.questions);
  return result;
};

const weirdnews = {
  title: 'Weird News',
  text: 'In <%= question1.answer %> in <%= question2.answer %> was arrested this morning after he <%= question3.answer %> a in front of <%= question4.answer %>. '
    + '<%= question5.answer %>, had a history of <%= question6.answer %>, but no one-not even his <%= question7.answer %> ever imagined he would <%= question8.answer %> with a <%= question9.answer %> stuck in his <%= question10.answer %>. '
  + 'I always thought he was <%= question11.answer %>, but I never thought he would do something like this. Even his <%= question12.answer %> was surprised. '
  + 'After a brief <%= question13.answer %>, cops followed him to a <%= question14.answer %>, where is reportedly <%= question15.answer %> in the fry machine. '
  + 'In <%= question16.answer %>, a woman was charged with a similar crime. But rather than <%= question17.answer %> with a <%= question18.answer %>, she <%= question19.answer %> with a <%= question20.answer %> dog. '
  + 'Either way, we imagine that after witnessing him <%= question21.answer %> with a <%= question22.answer %> there are probably a whole lot of <%= question23.answer %> that are going to need some therapy.',
  questions: {
    question1: { type: 'noun' },
    question2: { type: 'state' },
    question3: { type: 'verb' },
    question4: { type: 'noun' },
    question5: { type: 'propernoun' },
    question6: { type: 'verb' },
    question7: { type: 'noun' },
    question8: { type: 'verb' },
    question9: { type: 'noun' },
    question10: { type: 'bodypart' },
    question11: { type: 'adjective' },
    question12: { type: 'relative' },
    question13: { type: 'activity' },
    question14: { type: 'restaurant' },
    question15: { type: 'verbpasttense' },
    question16: { type: 'month' },
    question17: { type: 'verb' },
    question18: { type: 'noun' },
    question19: { type: 'verbpasttense' },
    question20: { type: 'adjective' },
    question21: { type: 'verb' },
    question22: { type: 'noun' },
    question23: { type: 'pluralnoun' }
  }
};

const lunchroom = {
  title: 'What happens in the lunchroom, stays in the lunchroom',
  text: 'Lunchtime in our cafeteria is always <%= question1.answer %>. '
  + 'They serve hot <%= question2.answer %> and <%= question3.answer %>, but some students <%= question4.answer %> their own <%= question5.answer %> to eat. '
  + 'Some kids quietly <%= question6.answer %> their <%= question7.answer %>, while others throw <%= question8.answer %> or <%= question9.answer %> when teachers aren\'t looking. '
  + 'One time, a bunch of kids mixed all of their unfinished <%= question10.answer %> and <%= question11.answer %> together to make a <%= question12.answer %> mountain of <%= question13.answer %> on a <%= question14.answer %>. '
  + 'The teachers were <%= question15.answer %>, but everyone had already <%= question16.answer %> outside for recess, so nobody got in trouble.',
  questions: {
    question1: { type: 'adjective' },
    question2: { type: 'food' },
    question3: { type: 'food' },
    question4: { type: 'verb' },
    question5: { type: 'pluralnoun' },
    question6: { type: 'verb' },
    question7: { type: 'food' },
    question8: { type: 'vegetables' },
    question9: { type: 'fruits' },
    question10: { type: 'food' },
    question11: { type: 'food' },
    question12: { type: 'adjective' },
    question13: { type: 'noun' },
    question14: { type: 'furniture' },
    question15: { type: 'emotion' },
    question16: { type: 'verbed' }
  }
};

const pizza = {
  title: 'Pizza Pizza',
  text: 'Pizza was invented by a <%= question1.answer %> <%= question2.answer %> chef named <%= question3.answer %>. '
    + 'To make a pizza, you need to take a lump of <%= question4.answer %>, and make a thin, round <%= question5.answer %> <%= question6.answer %>. '
    + 'Then you cover it with <%= question7.answer %> sauce, <%= question8.answer %> cheese, and fresh chopped <%= question9.answer %>. '
    + 'Next you have to bake it in a very hot <%= question10.answer %>. '
    + 'When it is done, cut it into <%= question11.answer %> <%= question12.answer %>. '
    + 'Some kids like <%= question13.answer %> pizza the best, but my favorite is the <%= question14.answer %> pizza. '
    + 'If I could, I would eat pizza <%= question15.answer %> times a day!',
  questions: {
    question1: { type: 'adjective' },
    question2: { type: 'nationality' },
    question3: { type: 'person' },
    question4: { type: 'noun' },
    question5: { type: 'adjective' },
    question6: { type: 'noun' },
    question7: { type: 'adjective' },
    question8: { type: 'adjective' },
    question9: { type: 'pluralnoun' },
    question10: { type: 'noun' },
    question11: { type: 'number' },
    question12: { type: 'shapes' },
    question13: { type: 'food' },
    question14: { type: 'food' },
    question15: { type: 'number' }
  }
};

module.exports = {
  pizza,
  lunchroom,
  weirdnews,
  generate
};
