# Singly Linked List

[Pull Request](https://github.com/ArzuVon/data-structures-and-algorithms/pull/9)

## Node

Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

## Linked List
- insert
  - Arguments: value
  - Returns: nothing
  - Adds a new node with that value to the head of the list with an O(1) Time performance.
- includes
  - Arguments: value
  - Returns: Boolean
    - Indicates whether that value exists as a Node’s value somewhere within the list.
- to string
  - Arguments: none
  - Returns: a string representing all the values in the Linked List, formatted as:
    ```"{ a } -> { b } -> { c } -> NULL"```

## Challenge

- Verify your types are correct with npm run check
- Verify your implementation is correct with npm run test
- When converting the value in a node to a string, use the display function in Collection.ts.
- DO NOT edit assignment.test.ts.
- Add your own tests to LinkedList.test.ts.
- Tests must pass the github workflow for full credit.

Write tests to prove the following functionality:

1. Can successfully instantiate an empty linked list
2. Can properly insert into the linked list
3. The head property will properly point to the first node in the linked list
4. Can properly insert multiple nodes into the linked list
5. Will return true when finding a value within the linked list that exists
6. Will return false when searching for a value in the linked list that does not exist
7. Can properly return a collection of all the values that exist in the linked list

## API

> N/A
