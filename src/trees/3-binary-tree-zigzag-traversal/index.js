class TreeNode {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new TreeNode(data);

    if (!this.root) {
      this.root = newNode;
      return true;
    }

    const queue = [this.root];

    while (queue.length) {
      const currentNode = queue.shift();

      if (!currentNode.left) {
        currentNode.left = newNode;
        return true;
      } else {
        queue.push(currentNode.left);
      }

      if (!currentNode.right) {
        currentNode.right = newNode;
        return true;
      } else {
        queue.push(currentNode.right);
      }
    }
  }
}

function traverseZigZag(root) {
  if (!root) {
    return [];
  }

  let visitedNodes = [];

  let queue = [root];
  let reverseOrder = false;

  while (queue.length) {
    let currentLevelSize = queue.length;
    let currentLevel = [];

    for (let i = 0; i < currentLevelSize; i++) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.data);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    // Put items into the visitied nodes as per reverse order check

    while (currentLevel.length) {
      if (reverseOrder) {
        visitedNodes.push(currentLevel.pop());
      } else {
        visitedNodes.push(currentLevel.shift());
      }
    }

    reverseOrder = !reverseOrder;
  }

  return visitedNodes;
}

function main() {
  const tree = new BinaryTree();
  tree.insert(1);
  tree.insert(2);
  tree.insert(3);
  tree.insert(4);
  tree.insert(5);
  tree.insert(6);
  tree.insert(7);
  tree.insert(8);
  tree.insert(9);


  console.log("TREE", tree);
  console.log("ZIG-ZAG", traverseZigZag(tree.root));
}

main();