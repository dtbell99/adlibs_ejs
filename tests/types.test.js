const assert = require('assert');
const types = require('../types.json');
const madlibs = require('../madlibs.js');

describe('type tests', () => {
  describe('madlibs', () => {
    it('should have types entry for pizza questions', () => {
      Object.keys(madlibs.pizza.questions)
        .forEach((key) => {
          const questionType = madlibs.pizza.questions[key].type;
          assert.strictEqual(true, Object.keys(types)
            .includes(questionType));
        });
    });

    it('should have types entry for lunchroom questions', () => {
      Object.keys(madlibs.lunchroom.questions)
        .forEach((key) => {
          const questionType = madlibs.lunchroom.questions[key].type;
          assert.strictEqual(true, Object.keys(types)
            .includes(questionType), `missing ${questionType} in types file.`);
        });
    });

    it('should have types entry for weirdnews questions', () => {
      Object.keys(madlibs.weirdnews.questions)
        .forEach((key) => {
          const questionType = madlibs.weirdnews.questions[key].type;
          assert.strictEqual(true, Object.keys(types)
            .includes(questionType), `missing ${questionType} in types file.`);
        });
    });
  });

  describe('types', () => {
    it('should return correct adjective array', () => {
      const expectedArray = [
        'happy', 'sad', 'fat', 'skinny', 'tall', 'short'
      ];
      const actualArray = types.adjective.example;
      assert.deepStrictEqual(actualArray, expectedArray);
    });

    it('should return correct nationality array', () => {
      const expectedArray = [
        'American', 'Australian', 'Belgian', 'Canadian', 'Chinese', 'French', 'German', 'Italian', 'Mexican', 'Swedish'
      ];
      const actualArray = types.nationality.example;
      assert.deepStrictEqual(actualArray, expectedArray);
    });

    it('should return correct person array', () => {
      const expectedArray = [
        'David Bell', 'Bob Smith'
      ];
      const actualArray = types.person.example;
      assert.deepStrictEqual(actualArray, expectedArray);
    });

    it('should return correct noun array', () => {
      const expectedArray = [
        'ball', 'toilet', 'bike'
      ];
      const actualArray = types.noun.example;
      assert.deepStrictEqual(actualArray, expectedArray);
    });

    it('should return correct pluralnoun array', () => {
      const expectedArray = [
        'french fries', 'soccer balls', 'shoes', 'dogs'
      ];
      const actualArray = types.pluralnoun.example;
      assert.deepStrictEqual(actualArray, expectedArray);
    });

    it('should return correct number array', () => {
      const expectedArray = [
        '1', '10', '25', '100'
      ];
      const actualArray = types.number.example;
      assert.deepStrictEqual(actualArray, expectedArray);
    });

    it('should return correct shapes array', () => {
      const expectedArray = [
        'squares', 'triangles', 'circles'
      ];
      const actualArray = types.shapes.example;
      assert.deepStrictEqual(actualArray, expectedArray);
    });

    it('should return correct food array', () => {
      const expectedArray = [
        'turkey', 'chicken', 'oatmeal'
      ];
      const actualArray = types.food.example;
      assert.deepStrictEqual(actualArray, expectedArray);
    });

    it('should return correct vegetables array', () => {
      const expectedArray = [
        'carrots', 'lettuce', 'peas', 'green beans'
      ];
      const actualArray = types.vegetables.example;
      assert.deepStrictEqual(actualArray, expectedArray);
    });

    it('should return correct fruits array', () => {
      const expectedArray = [
        'apples', 'oranges'
      ];
      const actualArray = types.fruits.example;
      assert.deepStrictEqual(actualArray, expectedArray);
    });

    it('should return correct furniture array', () => {
      const expectedArray = [
        'chair', 'couch', 'lamp', 'chest'
      ];
      const actualArray = types.furniture.example;
      assert.deepStrictEqual(actualArray, expectedArray);
    });

    it('should return correct verb array', () => {
      const expectedArray = [
        'jump', 'run', 'swim', 'fly'
      ];
      const actualArray = types.verb.example;
      assert.deepStrictEqual(actualArray, expectedArray);
    });

    it('should return correct emotion array', () => {
      const expectedArray = [
        'happy', 'sad', 'angry'
      ];
      const actualArray = types.emotion.example;
      assert.deepStrictEqual(actualArray, expectedArray);
    });

    it('should return correct verb-ed array', () => {
      const expectedArray = [
        'moved', 'jumped'
      ];
      const actualArray = types.verbed.example;
      assert.deepStrictEqual(actualArray, expectedArray);
    });

    it('should have label, description, and example for all types', () => {
      Object.keys(types).forEach((key) => {
        const { label, description, example } = types[key];
        assert.notEqual(label, undefined, `${key} missing label`);
        assert.notEqual(description, undefined, `${key} missing description`);
        assert.notEqual(example, undefined, `${key} missing example`);
      });
    });
  });
});
