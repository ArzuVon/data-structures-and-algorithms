const leftJoin = require('../hashmap-left-join');

describe('Hashmap left join', () => {

  it('throws an error if one of the maps is empty', () => {
    const mapOne = new Map();
    mapOne.set('hello', 'world');
    const mapTwo = new Map();
    expect(() => leftJoin(mapOne, mapTwo)).toThrow('empty hashmap!');
  });

  it('joins two hashmaps of strings', () => {
    const mapOne = new Map();
    mapOne.set('diligent', 'employed');
    mapOne.set('fond', 'enamored');
    mapOne.set('guide', 'usher');
    mapOne.set('outfit', 'garb');
    mapOne.set('wrath', 'anger');

    const mapTwo = new Map();
    mapTwo.set('diligent', 'idle');
    mapTwo.set('fond', 'averse');
    mapTwo.set('guide', 'follow');
    mapTwo.set('flow', 'jam');
    mapTwo.set('wrath', 'delight');

    expect(leftJoin(mapOne, mapTwo)).toEqual([['diligent', 'employed', 'idle'], ['fond', 'enamored', 'averse'], ['guide', 'usher', 'follow'], ['outfit', 'garb', null], ['wrath', 'anger', 'delight']]);
  });

  it('joins two hashmaps of with strings and numbers', () => {
    const mapOne = new Map();
    mapOne.set('a', 1);
    mapOne.set('b', 3);
    mapOne.set('c', 5);

    const mapTwo = new Map();
    mapTwo.set('a', 2);
    mapTwo.set('b', 4);
    mapTwo.set('c', 6);

    expect(leftJoin(mapOne, mapTwo)).toEqual([['a', 1, 2], ['b', 3, 4], ['c', 5, 6]]);
  });

  it('joins two hashmaps with no matching keys', () => {
    const mapOne = new Map();
    mapOne.set('a', 1);

    const mapTwo = new Map();
    mapTwo.set('b', 4);

    expect(leftJoin(mapOne, mapTwo)).toEqual([['a', 1, null]]);
  });

  it('joins two hashmaps with right join', () => {
    const mapOne = new Map();
    mapOne.set('a', 1);
    mapOne.set('b', 3);
    mapOne.set('c', 5);

    const mapTwo = new Map();
    mapTwo.set('a', 2);
    mapTwo.set('b', 4);
    mapTwo.set('c', 6);

    expect(leftJoin(mapOne, mapTwo, 'right')).toEqual([['a', 2, 1], ['b', 4, 3], ['c', 6, 5]]);

  });

  it('joins two hashmaps with right join with no matching keys', () => {
    const mapOne = new Map();
    mapOne.set('a', 1);

    const mapTwo = new Map();
    mapTwo.set('b', 4);

    expect(leftJoin(mapOne, mapTwo, 'right')).toEqual([['b', 4, null]]);

  });

});
