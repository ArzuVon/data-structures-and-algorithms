// let myArr = [5, 10, 1, 6, 15, 7];

// function insertionSort(arr) {
//   let arrLength = arr.length;

//   for (let i = 1; 1 < arrLength; i++) {
//     let current = arr[i];

//     console.log("i index: ", i);
//     console.log("i value:  ", current);
//     console.log("\n");

//     let j = i - 1;
//     console.log("j index: ", j);
//     console.log("j value: ", arr[j]);

//     while (j > -1 && current < arr[j]) {
//       console.log("while loop running");
//       arr[j + 1] = arr[j];

//       j--;
//     }

//     arr[j + 1] = current;
//   }
//   return arr;
// }
// New Test Code that works

console.log(insertionSort(myArr));
const insertionSort = require('../insertionSort.js');

describe('insertion sort', () => {
  it('throws an error is input array is empty', () => {
    const arr =  [];

    expect(() => insertionSort(arr)).toThrow('Input array is empty!');
  });

  it('sorts an array of random numbers', () => {
    const arr =  [5, 1, 10, 6, 15, 7];

    expect(insertionSort(arr)).toEqual([1, 5, 6, 7, 10, 15]);
  });

  it('sorts an array with a single value', () => {
    const arr =  [1];

    expect(insertionSort(arr)).toEqual([1]);
  });

  it('sorts an array with multiple values, including a zero', () => {
    const arr =  [20, 1, 0, 10, 5, ];

    expect(insertionSort(arr)).toEqual([0, 1, 5, 10, 20]);
  });

  it('sorts an array with repeating values', () => {
    const arr =  [5, 5, 5, 5, 5];

    expect(insertionSort(arr)).toEqual([5, 5, 5, 5, 5]);
  });

  it('sorts an array with negative and positive values', () => {
    const arr =  [-5, 1, -10, 6, 15, 7];

    expect(insertionSort(arr)).toEqual([-10, -5, 1, 6, 7, 15]);
  });

  it('sorts an array with all negative values', () => {
    const arr =  [-5, -1, -10, -6, -15, -7];

    expect(insertionSort(arr)).toEqual([-15, -10, -7, -6, -5, -1]);
  });

});
