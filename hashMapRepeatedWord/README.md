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

![Input/Output](https://user-images.githubusercontent.com/107226923/197114481-67e877f7-98f3-4825-8196-e2e4aa764b51.png)


---

## Whiteboard Process Solution

[Repeated Hashmap Word](https://miro.com/app/board/uXjVPdgoi_Q=/)

![Repeated Hashmap Word](https://user-images.githubusercontent.com/107226923/197114593-c2482089-4199-4ddb-868b-45e6dea42a08.png)

---

## Approach & Efficiency

- We have a linear O(n) time complexity as we perform 2 linear traversals,cand O(n) linear space complexity for our hash map and dupes array.
