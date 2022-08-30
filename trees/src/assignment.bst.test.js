const { BinarySearchTree } = require("./binary_search_tree.js");

describe.skip("Binary Search Tree", () => {
  const tree = new BinarySearchTree();
  for (const i of [2, 3, 11, 6, 9, 7, 5, 1]) {
    tree.add(i);
  }

  it("adds & maintains items in order", () => {
    expect(tree.inOrder()).toEqual([1, 2, 3, 5, 6, 7, 9, 11]);
  });

  it("looks up whether an item is in the tree", () => {
    expect(tree.contains(3)).toBe(true);
    expect(tree.contains(8)).toBe(true);
  });
});
