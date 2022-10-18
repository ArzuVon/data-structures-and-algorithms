const { Node, BinaryTree } = require('./binaryTree.js');

class BinarySearchTree extends BinaryTree {
  add(number) {
    let newNode = new Node(number);
    if (this.root === undefined) {
      this.root = newNode;
    } else {
      this.addNode(this.root, newNode);
    }
  }

  addNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === undefined) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === undefined) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  treeContains(node, value) {
    if (node.value === value) {
      return true;
    }
    if (value < node.value && node.left) {
      return this.treeContains(node.left, value);
    } else if (value > node.value && node.right) {
      return this.treeContains(node.right, value);
    } else {
      return false;
    }
  }

  contains(value) {
    if (this.root.value === value) {
      return true;
    }

    if (value < this.root.value && this.root.left) {
      return this.treeContains(this.root.left, value);
    } else if (value > this.root.value && this.root.right) {
      return this.treeContains(this.root.right, value);
    } else {
      return false;
    }
  }
}


module.exports = { BinarySearchTree };
