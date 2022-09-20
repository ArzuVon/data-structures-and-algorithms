class BinaryTree{
  constructor(){
    this.root = undefined;
  }

  preOrder(node, elements = []){
    if(this.root === undefined){
      throw new Error('empty binary tree');
    }
    elements.push(node.value);
    if(node.left){
      this.preOrder(node.left, elements);
    }
    if(node.right){
      this.preOrder(node.right, elements);
    }
    return elements;
  }

  inOrder(node, elements = []){
    if(this.root === undefined){
      throw new Error('empty binary tree');
    }
    if(node.left){
      this.inOrder(node.left, elements);
    }
    elements.push(node.value);
    if(node.right){
      this.inOrder(node.right, elements);
    }
    return elements;
  }

  postOrder(node, elements = []){
    if(this.root === undefined){
      throw new Error('empty binary tree');
    }
    if(node.left){
      this.postOrder(node.left, elements);
    }
    if(node.right){
      this.postOrder(node.right, elements);
    }
    elements.push(node.value);
    return elements;
  }
}

module.exports = BinaryTree;

