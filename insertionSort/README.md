# Insertion Sort

> Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array

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

> Test and whiteboard for step by step process

[Insertion Sort]()

---

Collaborators

- Tony
- Danny
