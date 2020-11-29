const assert = require('assert');
const madlibs = require('../madlibs.js');

describe('madlibs', () => {
  describe('what happens in the lunchroom', () => {
    it('should return correct text when generate is called', () => {
      const lunchroom = { ...madlibs.lunchroom };
      lunchroom.questions.question1.answer = 'silly';
      lunchroom.questions.question2.answer = 'biscuits';
      lunchroom.questions.question3.answer = 'crackers';
      lunchroom.questions.question4.answer = 'fly';
      lunchroom.questions.question5.answer = 'garbage';
      lunchroom.questions.question6.answer = 'sniff';
      lunchroom.questions.question7.answer = 'cabbage';
      lunchroom.questions.question8.answer = 'carrots';
      lunchroom.questions.question9.answer = 'apples';
      lunchroom.questions.question10.answer = 'applesauce';
      lunchroom.questions.question11.answer = 'cookies';
      lunchroom.questions.question12.answer = 'giant';
      lunchroom.questions.question13.answer = 'dirt';
      lunchroom.questions.question14.answer = 'chair';
      lunchroom.questions.question15.answer = 'angry';
      lunchroom.questions.question16.answer = 'moved';

      const expectedResult = 'Lunchtime in our cafeteria is always silly. '
        + 'They serve hot biscuits and crackers, but some students fly their own garbage to eat. '
        + 'Some kids quietly sniff their cabbage, while others throw carrots or apples when teachers aren\'t looking. '
        + 'One time, a bunch of kids mixed all of their unfinished applesauce and cookies together to make a giant mountain of dirt on a chair. '
        + 'The teachers were angry, but everyone had already moved outside for recess, so nobody got in trouble.';
      const actualResult = madlibs.generate(lunchroom);

      assert.strictEqual(actualResult, expectedResult);
    });
  });
  describe('pizza pizza', () => {
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
      pizza.questions.question10.answer = 'mudpuddle';
      pizza.questions.question11.answer = '500';
      pizza.questions.question12.answer = 'squares';
      pizza.questions.question13.answer = 'turkey';
      pizza.questions.question14.answer = 'cat food';
      pizza.questions.question15.answer = '1000';

      const expectedResult = 'Pizza was invented by a skinny American chef named Bob Smith. '
        + 'To make a pizza, you need to take a lump of garbage, and make a thin, round smelly shoe. '
        + 'Then you cover it with runny sauce, stinky cheese, and fresh chopped french fries. '
        + 'Next you have to bake it in a very hot mudpuddle. '
        + 'When it is done, cut it into 500 squares. '
        + 'Some kids like turkey pizza the best, but my favorite is the cat food pizza. '
        + 'If I could, I would eat pizza 1000 times a day!';
      const actualResult = madlibs.generate(pizza);

      assert.strictEqual(actualResult, expectedResult);
    });
  });
  describe('weird news', () => {
    it('should return correct text when generate is called', () => {
      const weirdNews = { ...madlibs.weirdnews };
      weirdNews.questions.question1.answer = 'car';
      weirdNews.questions.question2.answer = 'Indiana';
      weirdNews.questions.question3.answer = 'jumping';
      weirdNews.questions.question4.answer = 'boat';
      weirdNews.questions.question5.answer = 'Boston';
      weirdNews.questions.question6.answer = 'running';
      weirdNews.questions.question7.answer = 'cat';
      weirdNews.questions.question8.answer = 'singing';
      weirdNews.questions.question9.answer = 'building';
      weirdNews.questions.question10.answer = 'arm';
      weirdNews.questions.question11.answer = 'funny';
      weirdNews.questions.question12.answer = 'cousin';
      weirdNews.questions.question13.answer = 'skiing';
      weirdNews.questions.question14.answer = 'Jimmy Johns';
      weirdNews.questions.question15.answer = 'flew';
      weirdNews.questions.question16.answer = 'January';
      weirdNews.questions.question17.answer = 'slipping';
      weirdNews.questions.question18.answer = 'computer';
      weirdNews.questions.question19.answer = 'jumped';
      weirdNews.questions.question20.answer = 'happy';
      weirdNews.questions.question21.answer = 'flying';
      weirdNews.questions.question22.answer = 'goat';
      weirdNews.questions.question23.answer = 'monkeys';

      const expectedResult = 'In car in Indiana was arrested this morning after he jumping a in front of boat. '
        + 'Boston, had a history of running, but no one-not even his cat ever imagined he would singing with a building stuck in his arm. '
        + 'I always thought he was funny, but I never thought he would do something like this. '
        + 'Even his cousin was surprised. After a brief skiing, cops followed him to a Jimmy Johns, where is reportedly flew in the fry machine. '
        + 'In January, a woman was charged with a similar crime. But rather than slipping with a computer, she jumped with a happy dog. '
        + 'Either way, we imagine that after witnessing him flying with a goat there are probably a whole lot of monkeys that are going to need some therapy.';
      const actualResult = madlibs.generate(weirdNews);

      assert.strictEqual(actualResult, expectedResult);
    });
  });
});
