function breadthFirstSearch(bt){

	if(bt.root === undefined){
	  throw new Error('empty binary tree');
	}
  
	let queue = [];
	let values = [];
  
	queue.push(bt.root);
  
	while(queue.length !== 0) {
	  let front = queue.shift();
	  values.push(front.value);
	  if(front.left !== undefined){
		queue.push(front.left);
	  }
	  if(front.right !== undefined){
		queue.push(front.right);
	  }
	}
	return values;
  }
  
  module.exports = breadthFirstSearch;


//OTHER IDEAS BELOW to do the same from RESOURCES I pulled from with explanation

// // Iterative Queue based javascript program
// // to do level order traversal
// // of Binary Tree

// /* Class to represent Tree node */
// class Node {
// 	constructor(val) {
// 		this.data = val;
// 		this.left = null;
// 		this.right = null;
// 	}
// }

// /* Class to print Level Order Traversal */
// 	/*
// 	* Given a binary tree. Print its nodes in level order using array for
// 	* implementing queue
// 	*/
// 	function breadthFirst() {
// 		var queue = [];
// 		queue.push(root);
// 		while (queue.length != 0) {
// 			/*
// 			* The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// 			* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
// 			*/
// 			var tempNode = queue.shift();
// 			console.log(tempNode.data + " ");

// 			/* Enqueue left child */
// 			if (tempNode.left != null) {
// 				queue.push(tempNode.left);
// 			}

// 			/* Enqueue right child */
// 			if (tempNode.right != null) {
// 				queue.push(tempNode.right);
// 			}
// 		}
// 	}

// /* creating a binary tree and entering the nodes */
// 		const root = new Node(9);
// 		root.left = new Node(3);
// 		root.right = new Node(55);
// 		root.left.left = new Node(103);
// 		root.left.right = new Node(4);
// 		console.log("Level order traversal of binary tree is - ");
// 		breadthFirst();

// // This code is contributed resourced and inspired from medium.com at https://medium.com/basecs/breaking-down-breadth-first-search-cebe696709d9
