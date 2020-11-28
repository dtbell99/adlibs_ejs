const ejs = require('ejs');

const generate = (obj) => {
  const template = ejs.compile(obj.text);
  const result = template(obj.questions);
  return result;
};

const pizza = {
  questions: {
    question1: {
      type: 'adjective'
    },
    question2: {
      type: 'nationality'
    },
    question3: {
      type: 'person'
    },
    question4: {
      type: 'noun'
    },
    question5: {
      type: 'adjective'
    },
    question6: {
      type: 'noun'
    },
    question7: {
      type: 'adjective'
    },
    question8: {
      type: 'adjective'
    },
    question9: {
      type: 'pluralnoun'
    },
    question10: {
      type: 'noun'
    },
    question11: {
      type: 'number'
    },
    question12: {
      type: 'shapes'
    },
    question13: {
      type: 'food'
    },
    question14: {
      type: 'food'
    },
    question15: {
      type: 'number'
    }
  },
  text: 'Pizza was invented by a <%= question1.answer %> <%= question2.answer %> chef named <%= question3.answer %>. '
        + 'To make a pizza, you need to take a lump of <%= question4.answer %>, and make a thin, round <%= question5.answer %> <%= question6.answer %>. '
        + 'Then you cover it with <%= question7.answer %> sauce, <%= question8.answer %> cheese, and fresh chopped <%= question9.answer %>. '
        + 'Next you have to bake it in a very hot <%= question10.answer %>. '
        + 'When it is done, cut it into <%= question11.answer %> <%= question12.answer %>. '
        + 'Some kids like <%= question13.answer %> pizza the best, but my favorite is the <%= question14.answer %> pizza. '
        + 'If I could, I would eat pizza <%= question15.answer %> times a day!'
};

module.exports = {
  pizza,
  generate
};
