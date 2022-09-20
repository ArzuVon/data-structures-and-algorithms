const BinaryTree = require('./binaryTree.js');
const Node = require('./node.js');
const breadthFirstSearch = require('./tree-breadth-first.js');


describe('Binary Tree Breadth-First-Search', () => {

  it('instantiates an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree).toBeDefined();
  });

  it('throws an error if the binary tree is empty', () => {
    const tree = new BinaryTree();
    expect(() => breadthFirstSearch(tree)).toThrowError('empty binary tree');
  });

  it('instantiates an tree with a single node', () => {
    const tree = new BinaryTree();
    let n1 = new Node(1);
    tree.root = n1;
    expect(breadthFirstSearch(tree)).toEqual([1]);
  });


  it('does a breadth-first-search and prints nodes with integer values', () => {
    const tree = new BinaryTree();

    let n1 = new Node(1);
    let n2 = new Node(2);
    let n3 = new Node(3);
    let n4 = new Node(4);
    let n5 = new Node(5);
    let n6 = new Node(6);
    let n7 = new Node(7);

    tree.root = n1;
    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;
    n3.left = n6;
    n3.right = n7;

    expect(breadthFirstSearch(tree)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('does a breadth-first-search and prints nodes with string values', () => {
    const tree = new BinaryTree();

    let n1 = new Node('a');
    let n2 = new Node('b');
    let n3 = new Node('c');
    let n4 = new Node('d');
    let n5 = new Node('e');
    let n6 = new Node('f');
    let n7 = new Node('g');

    tree.root = n1;
    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;
    n3.left = n6;
    n3.right = n7;

    expect(breadthFirstSearch(tree)).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g']);

  });

  it('does a breadth-first-search and prints nodes with mixed data types', () => {
    const tree = new BinaryTree();

    let n1 = new Node('a');
    let n2 = new Node(1);
    let n3 = new Node('b');
    let n4 = new Node(2);
    let n5 = new Node('c');
    let n6 = new Node(3);

    tree.root = n1;
    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;
    n3.left = n6;

    expect(breadthFirstSearch(tree)).toEqual(['a', 1, 'b', 2, 'c', 3]);

  });

});
