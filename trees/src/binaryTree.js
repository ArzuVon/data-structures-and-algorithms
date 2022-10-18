class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left; 
    this.right = right; 
  }

  preOrder() {
    let traversal = [];
    traversal.push(this.value); 
    if (this.left) {
      let leftTraversal = this.left.preOrder();
      traversal = traversal.concat(leftTraversal);
    }
    if (this.right) {
      let rightTraversal = this.right.preOrder();
      traversal = traversal.concat(rightTraversal);
    }
    return traversal;
  }

  inOrder() {
    let traversal = [];
    traversal.push(this.value); 
    if (this.left) {
      let leftTraversal = this.left.inOrder();
      traversal = [...leftTraversal, ...traversal];
    }
    if (this.right) {
      let rightTraversal = this.right.inOrder();
      traversal = [...traversal, ...rightTraversal];
    }
    return traversal;
  }

  postOrder() {
    let traversal = [];
    traversal.push(this.value); 
    if (this.right) {
      let rightTraversal = this.right.postOrder();
      traversal = [...rightTraversal, ...traversal];
    }
    if (this.left) {
      let leftTraversal = this.left.postOrder();
      traversal = [...leftTraversal, ...traversal];
    }
    return traversal;
  }

  max() {
    let traversal = [];
    traversal.push(this.value);
    if (this.right) {
      let rightTraversal = this.right.postOrder();
      traversal = [...rightTraversal, ...traversal];
    }
    if (this.left) {
      let leftTraversal = this.left.postOrder();
      traversal = [...leftTraversal, ...traversal];
    }
    return Math.max(...traversal);
  }
}
class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  preOrder() {
    return this.root.preOrder();

  }
  inOrder() { return this.root.inOrder(); }
  postOrder() { return this.root.postOrder(); }
  max() { return this.root.max(); }
}

module.exports = { Node };


