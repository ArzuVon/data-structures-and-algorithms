# Tree Intersection

## Code Challenge

>Find common values in 2 binary trees. What 2 values are shared between trees?
>Write a function called tree_intersection that takes two binary trees as parameters.
Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees.
>Subproblems:
Multiple items could hash to the same index, convert to arrays, compare arrays

---

## Approach & Efficiency

```

Take in 2 binary trees
Each tree is an array
2 Seperate array from the two trees
We then loop through at each index
Compare each tree indexes
Push shared values into a third array

```

```

Input:

Binary Tree 1 == {9} {8} {7} {100} {444} {88} {77} {55} {11} {10}

Binary Tree 2 == {444} {8} {99} {54} {77} {30} {33} {11} {19}

Output:
{8} {444} {77} {11}

```
---

## Big O

- Time Complexity: O(n^2) where n is the number of nodes in the binary tree.
- Auxiliary Space: O(n) where n is the number of nodes in the binary tree.
