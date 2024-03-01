export { };

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

    let current = this.root;

    while (true) {
      if (data < current.data) {
        // left side
        if (current.left === null) {
          current.left = newNode;
          return true;
        }
        current = current.left;
      } else if (data > current.data) {
        // right side
        if (current.right === null) {
          current.right = newNode;
          return true;
        }
        current = current.right;
      } else {
        // duplicate values
        return false;
      }
    }
  }

  BFS() {
    const visitedNodes = [];

    const queue = [this.root];

    while (queue.length) {
      const visited = queue.pop();
      visitedNodes.push(visited.data);

      if (visited.left) {
        queue.unshift(visited.left);
      }

      if (visited.right) {
        queue.unshift(visited.right)
      }
    }

    return visitedNodes;
  }

  BFSLevelWise() {
    const visitedNodes = [];

    const queue = [this.root];

    while (queue.length) {
      const levelSize = queue.length;
      const currentLevel = [];

      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();
        currentLevel.push(currentNode.data);

        if (currentNode.left) {
          queue.push(currentNode.left);
        }

        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }

      visitedNodes.push(currentLevel);
    }

    return visitedNodes;
  }

}

function main() {
  const tree = new BinaryTree();

  tree.insert(5);
  tree.insert(3);
  tree.insert(7);
  tree.insert(6);
  tree.insert(2);
  tree.insert(4);
  tree.insert(8);

  console.log(tree.BFS());
  console.log(tree.BFSLevelWise());
}

main();