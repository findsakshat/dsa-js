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

function levelOrderSuccessor(root, target) {
  const queue = [root];

  while (queue.length) {
    const currentNode = queue.shift();

    if (currentNode.left) {
      queue.push(currentNode.left)
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    if (currentNode.data === target) {
      const levelOrderSuccessor = queue.shift();
      return levelOrderSuccessor;
    }
  }

  return null;
}

function main() {
  const tree = new BinaryTree();
  tree.insert(3);
  tree.insert(4);
  tree.insert(8);
  tree.insert(12);
  tree.insert(14);
  tree.insert(7);
  tree.insert(11);
  tree.insert(36);
  tree.insert(9);
  tree.insert(2);
  tree.insert(44);

  // console.log(tree.root);

  console.log("LEVEL ORDER SUCCESSOR", levelOrderSuccessor(tree.root, 3)); // 7
  console.log("LEVEL ORDER SUCCESSOR", levelOrderSuccessor(tree.root, 14)); // 7
  console.log("LEVEL ORDER SUCCESSOR", levelOrderSuccessor(tree.root, 7)); // 11
  console.log("LEVEL ORDER SUCCESSOR", levelOrderSuccessor(tree.root, 11)); // 36
}

main();