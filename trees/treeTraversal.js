class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class BST {
  constructor(treeNodes) {
    this.nodes = treeNodes;
    this.inorder = [];
    this.preorder = [];
    this.postorder = [];
    this.levelorder = [];
    this.zigZag = [];
  }
  inOrderTraversal(root) {
    if (root == null) {
      return;
    }
    this.inOrderTraversal(root.left);
    this.inorder.push(root.val);
    this.inOrderTraversal(root.right);
  }
  inOrderTraversalIterative(root) {
    let stack = [];

    while (root || stack.length > 0) {
      while (root) {
        stack.push(root);
        root = root.left;
      }
      root = stack.pop();
      this.inorder.push(root.val);
      root = root.right;
    }
  }
  preOrderTraversal(root) {
    if (root == null) {
      return;
    }
    this.preorder.push(root.val);
    this.preOrderTraversal(root.left);
    this.preOrderTraversal(root.right);
  }
  preOrderTraversalIterative(root) {
    let stack = [root];

    while (stack.length > 0) {
      let node = stack.pop();
      this.preorder.push(node.val);

      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
    }
  }
  postOrderTraversal(root) {
    if (root == null) {
      return;
    }
    this.postOrderTraversal(root.left);
    this.postOrderTraversal(root.right);
    this.postorder.push(root.val);
  }
  postOrderTraversalIterative(root) {
    let stack1 = [root];
    let stack2 = [];

    while (stack1.length > 0) {
      let node = stack1.pop();
      stack2.push(node);

      if (node.left) {
        stack1.push(node.left);
      }
      if (node.right) {
        stack1.push(node.right);
      }
    }
    while (stack2.length > 0) {
      this.postorder.push(stack2.pop().val);
    }
  }

  levelOrderTraversal(root) {
    let q = [root];
    while (q.length > 0) {
      let currentNode = q.shift();
      this.levelorder.push(currentNode.val);
      if (currentNode.left !== null) {
        q.push(currentNode.left);
      }
      if (currentNode.right != null) {
        q.push(currentNode.right);
      }
    }
  }
  zigZagTraversal(root) {
    let s1 = [root];
    let s2 = [];
    let left2right = true;
    while (s1.length > 0) {
      let currentNode = s1.pop();
      if (currentNode) {
        this.zigZag.push(currentNode.val);
        if (left2right) {
          if (currentNode.left !== null) {
            s2.push(currentNode.left);
          }
          if (currentNode.right != null) {
            s2.push(currentNode.right);
          }
        } else {
          if (currentNode.right != null) {
            s2.push(currentNode.right);
          }
          if (currentNode.left !== null) {
            s2.push(currentNode.left);
          }
        }
      }
      if (s1.length === 0) {
        left2right = !left2right;
        s1 = s2;
        s2 = [];
      }
    }
  }
}

function treeTraversal() {
  // create arr of tree nodes
  let node1 = new TreeNode(1);
  let node2 = new TreeNode(2);
  let node3 = new TreeNode(3);
  let node4 = new TreeNode(4);
  let node5 = new TreeNode(5);
  let node6 = new TreeNode(6);
  let node7 = new TreeNode(7);
  let node8 = new TreeNode(8);
  let node9 = new TreeNode(9);

  node1.left = node2;
  node1.right = node3;
  node3.left = node4;
  node3.right = node5;
  node5.left = node6;
  node5.right = node7;
  node2.left = node8;
  node2.right = node9;

  let arr = [node1, node2, node3, null, null, node4, node5];
  // iterative approach
  let bst = new BST(arr);
  bst.preOrderTraversalIterative(arr[0]);
  bst.postOrderTraversalIterative(arr[0]);
  bst.inOrderTraversalIterative(arr[0]);
  console.log(bst.inorder, bst.preorder, bst.postorder);

  bst = new BST(arr);
  bst.preOrderTraversal(arr[0]);
  bst.postOrderTraversal(arr[0]);
  bst.inOrderTraversal(arr[0]);
  console.log(bst.inorder, bst.preorder, bst.postorder);

  bst.levelOrderTraversal(arr[0]);
  console.log('Level Order:', bst.levelorder);

  bst.zigZagTraversal(arr[0]);
  console.log('ZigZag Order:', bst.zigZag);
}
treeTraversal();
