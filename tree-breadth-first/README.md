# Breadth-first Traversal

## Code Challenge

>Write a function called breadth first
Return: list of all values in the tree, in the order they were encountered

## Code

[Tree Breadth First, Replit](https://replit.com/@VonArzu/Tree-Breadth-First#index.js)

```

function breadthFirst() {
  var queue = [];
  queue.push(root);
  while (queue.length != 0) {
   var tempNode = queue.shift();
   console.log(tempNode.data + " ");

   if (tempNode.left != null) {
    queue.push(tempNode.left);
   }
   if (tempNode.right != null) {
    queue.push(tempNode.right);
   }
  }
 }

```

## Approach & Efficiency

![Whiteboard](https://user-images.githubusercontent.com/107226923/191178401-0adab623-4cbe-4da5-841a-34dc833c0188.png)

> using a while loop to continue doing those three steps of checking a node, adding its left child, and adding its right child. We continue iterating through the queue array until everything has been removed from it, and its length is 0.

### Test cases

```

const root = new Node(9);
  root.left = new Node(3);
  root.right = new Node(55);
  root.left.left = new Node(103);
  root.left.right = new Node(4);
  console.log("Level order traversal of binary tree is - ");
  breadthFirst();

```

## Big O

- Time Complexity: O(n) where n is the number of nodes in the binary tree.
- Auxiliary Space: O(n) where n is the number of nodes in the binary tree.
