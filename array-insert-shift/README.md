# Whiteboard only challenge

[Code Challenge 02](https://derekdouglas365923.invisionapp.com/freehand/Code-Challenge-02-kxs1Pq2yL)

## Array-insert-shift

```
Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index
```

**Trace/Walkthrough
```
inputArray = [ 1, 2, 3, 4, 5 ];
inputMe = 145
inputArray.length = 5
5 / 2 = 2.5
Math.round(2.5) = 3
Center of inputArray = 3
Add element after third index ( 3 )
inputArray = [ 1, 2, 3, 145, 4, 5 ]
```

## Whiteboard Process

![Array-insert-shift Whiteboard]()

## Approach & Efficiency

- Start with array and element to be added
- Divide array length by 2 to find the insertion point of new element
- Identify index at center of array
- Insert element to be added after that index

**Big O Analysis**

- Runtime: O(n)
- Memory: O(c)
