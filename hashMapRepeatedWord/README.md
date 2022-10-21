# Challenge Summary Repeated Hashmap Word

## Problem

>Write a function called repeated word that finds the first word to occur more than once in a string
Arguments: string
Return: string

---

## Algorithm/Pseudo

```

Let n be the number of words in the input string s.

We iterate through every word in s to fill up the hash map 
occurrences with n elements, and then traverse over occurrences.

```

![Input/Output]()


---

## Whiteboard Process Solution

[Repeated Hashmap Word](https://miro.com/app/board/uXjVPdgoi_Q=/)

![Repeated Hashmap Word]()

---

## Approach & Efficiency

- We have a linear O(n) time complexity as we perform 2 linear traversals,cand O(n) linear space complexity for our hash map and dupes array.
