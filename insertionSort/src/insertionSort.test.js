let myArr = [5, 10, 1, 6, 15, 7];

function insertionSort(arr) {
  let arrLength = arr.length;

  for (let i = 1; 1 < arrLength; i++) {
    let current = arr[i];

    console.log("i index: ", i);
    console.log("i value:  ", current);
    console.log("\n");

    let j = i - 1;
    console.log("j index: ", j);
    console.log("j value: ", arr[j]);

    while (j > -1 && current < arr[j]) {
      console.log("while loop running");
      arr[j + 1] = arr[j];

      j--;
    }

    arr[j + 1] = current;
  }
  return arr;
}
console.log(insertionSort(myArr));
