# Challenge Summary Merge Sort

## Transforming pseudocode for Merge Sort

- Write a function given an array of numbers you compare values and then sort them in order.

```

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

```

> Trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

---

## Whiteboard Process

[Merge Sort Whiteboard](https://miro.com/app/board/uXjVPdgoi_Q=/?share_link_id=124277752556)

---

## Approach & Efficiency

- Space: O(n), In merge sort all elements are copied in the array.
- Time: O(N log(N)), Sorting arrays on different splits.
