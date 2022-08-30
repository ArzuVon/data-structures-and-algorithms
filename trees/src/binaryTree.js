//Pre-order: root >> left >> right
// In - order: left >> root >> right
// Post - order: left >> right >> root

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left; // A Node
    this.right = right; // A Node
  }

  preOrder() {
    //Pre-order: root >> left >> right
    // Return a single array
    let traversal = [];
    traversal.push(this.value); // Root

    if (this.left) {
      // Left
      let leftTraversal = this.left.preOrder();
      traversal = traversal.concat(leftTraversal);
    }

    // Right
    if (this.right) {
      let rightTraversal = this.right.preOrder();
      traversal = traversal.concat(rightTraversal);
    }

    return traversal;
  }

  inOrder() {
    // In - order: left >> root >> right
    let traversal = [];
    traversal.push(this.value); // Root
    if (this.left) {
      // Left
      let leftTraversal = this.left.inOrder();
      traversal = [...leftTraversal, ...traversal];
    }
    // Right
    if (this.right) {
      let rightTraversal = this.right.inOrder();
      traversal = [...traversal, ...rightTraversal];
    }
    return traversal;
  }



  postOrder() {
    // Post - order: left >> right >> root
    let traversal = [];
    traversal.push(this.value); // Root
    // Right
    if (this.right) {
      let rightTraversal = this.right.postOrder();
      traversal = [...rightTraversal, ...traversal];
    }
    if (this.left) {
      // Left
      let leftTraversal = this.left.postOrder();
      traversal = [...leftTraversal, ...traversal];
    }
    return traversal;
  }
}

module.exports = { Node };


