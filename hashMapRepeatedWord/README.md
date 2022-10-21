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

![Input/Output](https://user-images.githubusercontent.com/107226923/195680162-9877d95c-ca8a-4c20-b3a5-68e2a91cbc9b.png)


---

## Whiteboard Process Solution

[Repeated Hashmap Word](https://miro.com/app/board/uXjVPdgoi_Q=/)

![Repeated Hashmap Word](https://user-images.githubusercontent.com/107226923/195680162-9877d95c-ca8a-4c20-b3a5-68e2a91cbc9b.png)

---

## Approach & Efficiency

- We have a linear O(n) time complexity as we perform 2 linear traversals,cand O(n) linear space complexity for our hash map and dupes array.
