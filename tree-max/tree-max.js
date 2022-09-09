let root;
	
class Node
{
    constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
    }
}

// Returns the max value in a binary tree
function findMax(node)
{
if (node == null)
        return; 
// or return Number.MIN_VALUE? maybe if needed
    let tree = node.data;
    let lTree = findMax(node.left);
    let rTree = findMax(node.right);

    if (lTree > tree)
        tree = lTree;
    if (rTree > tree)
        tree = rTree;
    return tree;
}

root = new Node(2);
root.left = new Node(7);
root.right = new Node(5);
root.left.right = new Node(6);
root.left.right.left = new Node(1);
root.left.right.right = new Node(11);
root.right.right = new Node(9);
root.right.right.left = new Node(4);

//testing code here
console.log("Maximum element is "
                + findMax(root));

