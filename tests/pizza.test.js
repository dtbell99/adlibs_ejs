const assert = require('assert');
const madlibs = require('../madlibs.js');


describe('examples', () => {
    it('should return correct examples for adjective', () => {
        const expectedLength = 6;
        const actualLength = madlibs.examples.adjective.length;
        assert.strictEqual(actualLength, expectedLength);
    });

    it('should return correct examples array', () => {
        const expectedArray = [
            "happy", "sad", "fat", "skinny", "tall", "short"
        ];
        const actualArray = madlibs.examples.adjective;
        assert.deepStrictEqual(actualArray, expectedArray);
    });
});

describe('pizza madlib', () => {
    it('should return correct text when generate is called', () => {
        const pizza = {...madlibs.pizza};
        pizza.questions.question1.answer = 'skinny';
        
        const expectedResult = "Pizza was invented by a skinny";
        const actualResult = madlibs.generate(pizza);

        assert.strictEqual(actualResult, expectedResult);
    });
});