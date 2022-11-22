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


  //ANOTHER SIMPLE TEST BELOW
  // const map1: Map<string, string> = new Map([
  //   ["diligent", "employed"],
  //   ["fond", "enamored"],
  //   ["guide", "usher"],
  //   ["outfit", "garb"],
  //   ["wrath", "anger"]
  // ])
  
  // const map2: Map<string, string> = new Map([
  //   ["diligent", "idle"],
  //   ["fond", "averse"],
  //   ["guide", "follow"],
  //   ["flow", "jam"],
  //   ["wrath", "delight"],
  // ])
  
  
  
  // test('leftJoin', () => {
  //   expect([...leftJoin(map1, map2)]).toEqual([
  //     ["diligent", ["employed", "idle"]],
  //     ["fond", ["enamored", "averse"]],
  //     ["guide", ["usher", "follow"]],
  //     ["outfit", ["garb", null]],
  //     ["wrath", ["anger", "delight"]]
  //   ]);
  // });
  
});
