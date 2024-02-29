export { }

class AVLNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  getHeight(node) {
    if (node === null) {
      return 0;
    }

    // Recursively calculate the height
    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);

    // Return the maximum height of the left and right subtrees, plus 1 for the current node
    return Math.max(leftHeight, rightHeight) + 1;
  }

  insert(data) {
    const newNode = new AVLNode(data);

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
}

function main() {
  const avl = new AVLTree();

  avl.insert(10);
  avl.insert(5);
  avl.insert(15);
  avl.insert(2);

  console.log(avl);

  console.log(avl.getHeight(avl.root));
}

main();