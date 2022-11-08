const BinaryTree = require('../../trees/src/binaryTree');
const Node = require('../../trees/src/node');
const treeIntersection = require('../tree-intersection');

describe('Tree Intersection', () => {
  it('performs tree intersection with one empty tree', () => {
    const tree1 = new BinaryTree(new Node(150, new Node(100, new Node(75), new Node(160, new Node(125), new Node(175))), new Node(250, new Node(200), new Node(350, new Node(300), new Node(500)))));
    const tree2 = new BinaryTree();

    expect(() => treeIntersection(tree1, tree2)).toThrow('binary tree is empty');
  });

  it('performs tree intersection with only one node in each tree', () => {
    const tree1 = new BinaryTree(new Node(100));
    const tree2 = new BinaryTree(new Node(150));
    expect(treeIntersection(tree1, tree2)).toEqual([]);
  });

  it('performs tree intersection with more than one node in each tree', () => {
    const tree1 = new BinaryTree(new Node(150, new Node(100, new Node(75), new Node(160, new Node(125), new Node(175))), new Node(250, new Node(200), new Node(350, new Node(300), new Node(500)))));
    const tree2 = new BinaryTree(new Node(42, new Node(100, new Node(15), new Node(160, new Node(125), new Node(175))), new Node(600, new Node(200), new Node(350, new Node(4), new Node(500)))));

    expect(treeIntersection(tree1, tree2)).toEqual([100, 160, 125, 175, 200, 350, 500]);
  });

  it('performs tree intersection with more than one node each tree that has no matches', () => {
    const tree1 = new BinaryTree(new Node(1, new Node(10, new Node(7), new Node(6, new Node(12), new Node(75))), new Node(25, new Node(20), new Node(35, new Node(30), new Node(50)))));
    const tree2 = new BinaryTree(new Node(2, new Node(11, new Node(15), new Node(16, new Node(13), new Node(17))), new Node(60, new Node(21), new Node(33, new Node(4), new Node(51)))));

    expect(treeIntersection(tree1, tree2)).toEqual([]);
  });
});
