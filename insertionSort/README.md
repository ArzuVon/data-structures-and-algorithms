# Insertion Sort

> write a function called insertionSort that sorts an
> unsorted array with insertion

---

### Input/Output

Input: unsort array [5, 1, 10, 6, 15, 71
Output: sorted array [1, 5, 6, 7, 10, 15

---

```

InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp

```

---

## Whiteboard Process

![Insertion Sort](https://user-images.githubusercontent.com/107226923/196567336-9e8dc9aa-abbd-4b9b-8427-57aaaed05b7e.png)

## Approach & Efficiency

### Time and Space complexity is O(n)

- create a function that takes in an array
- check if array length is equal to 0
  - throw Error
- Enter for loop
  - set current variable to arrli]
  - set j variable to i - 1
  - Enter while loop if j > -1 & arr[j] > current
    - set arr[j + 1] = arr[j]
    - decrement j
- exit while loop
- set arr[j + i] = current
- return arr;

---

## Solution

```

function insertionSort(arr) {
  let arrLength = arr.length;

  for (let i = 1; i < arrLength; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
module.exports = insertionSort;

```

Collaborators

- Tony
- Danny
