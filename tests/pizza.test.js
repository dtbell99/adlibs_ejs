const assert = require('assert');
const madlibs = require('../madlibs.js');

describe('pizza madlib', () => {
  it('should return correct text when generate is called', () => {
    const pizza = { ...madlibs.pizza };
    pizza.questions.question1.answer = 'skinny';
    pizza.questions.question2.answer = 'American';
    pizza.questions.question3.answer = 'Bob Smith';
    pizza.questions.question4.answer = 'garbage';
    pizza.questions.question5.answer = 'smelly';
    pizza.questions.question6.answer = 'shoe';
    pizza.questions.question7.answer = 'runny';
    pizza.questions.question8.answer = 'stinky';
    pizza.questions.question9.answer = 'french fries';

    const expectedResult = 'Pizza was invented by a skinny American chef named Bob Smith. '
            + 'To make a pizza, you need to take a lump of garbage, and make a thin, round smelly shoe. '
            + 'Then you cover it with runny sauce, stinky cheese, and fresh chopped french fries.';
    const actualResult = madlibs.generate(pizza);

    assert.strictEqual(actualResult, expectedResult);
  });
});
