// Takes two binary trees, returns an array of their intersecting values
function treeIntersection(binaryTree1, binaryTree2){

  const matches = [];
  const map = new Map();
  const binaryTreeArr1 = bt1.preOrder();
  const binaryTreeArr2 = bt2.preOrder();

  for(const item of binaryTreeArr1){
    map.set(item);
  }

  for(const item of binaryTreeArr2){
    if(map.has(item)){
      matches.push(item);
    }
  }
  return matches;
}

module.exports = treeIntersection;

