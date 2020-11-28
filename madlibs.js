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
    }
  },
  text: 'Pizza was invented by a <%= question1.answer %> <%= question2.answer %> chef named <%= question3.answer %>. '
        + 'To make a pizza, you need to take a lump of <%= question4.answer %>, and make a thin, round <%= question5.answer %> <%= question6.answer %>. '
        + 'Then you cover it with <%= question7.answer %> sauce, <%= question8.answer %> cheese, and fresh chopped <%= question9.answer %>.'
};

module.exports = {
  pizza,
  generate
};
