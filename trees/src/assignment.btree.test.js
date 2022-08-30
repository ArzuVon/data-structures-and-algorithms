// const { BinaryTree, Node } = require("./binary_tree.js");
const { Node } = require("./binary_tree.js");

describe("Binary Tree", () => {
  // const tree = new BinaryTree(
  const tree = new Node(
    1,
    new Node(7, new Node(2), new Node(6, new Node(3), new Node(11))),
    new Node(9, undefined, new Node(9, new Node(5)))

  );

  //          1
  //        /   \
  //       7     9
  //      / \     \
  //     2   6     9
  //        / \   /
  //       3  11 5
  it("does an in-order traversal (left, root, right)", () => {
    expect(tree.inOrder()).toEqual([2, 7, 3, 6, 11, 1, 9, 5, 9]);
  });

  it("does an post-order traversal (left, right, root)", () => {
    expect(tree.postOrder()).toEqual([2, 3, 11, 6, 7, 5, 9, 9, 1]);
  });

  it("does an pre-order traversal (root, left, right)", () => {
    expect(tree.preOrder()).toEqual([1, 7, 2, 6, 3, 11, 9, 9, 5]);
  });
});
