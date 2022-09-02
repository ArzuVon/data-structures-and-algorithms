# Max value in Binary Tree

## Code Challenge
>Write the following method for the Binary Tree class

find maximum value
Arguments: none
Returns: number
Find the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

## Whiteboard Process

![Max in Binary Tree Whiteboard](https://www.figma.com/file/ByLeDmjkPAz7z9z2r2Qgjn/Code-Challenge-16?node-id=0%3A1)

## Replit Code
[Max BTS Completed](https://replit.com/@VonArzu/Code-Challenge-16#index.js)

## Approach & Efficiency

### Highlight of data
```
let tree = node.data;
let lTree = findMax(node.left);
let rTree = findMax(node.right);
```
### Test cases 

```
root = new Node(2);
	root.left = new Node(7);
	root.right = new Node(5);
	root.left.right = new Node(6);
	root.left.right.left = new Node(1);
	root.left.right.right = new Node(11);
	root.right.right = new Node(9);
	root.right.right.left = new Node(4);
```
