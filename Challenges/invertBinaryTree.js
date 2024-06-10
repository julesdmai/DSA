// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

const invertBinaryTree = (root) => {
    const dfs = (node) => {
        if (!node) return;
        
        // Swap the left and right children
        [node.left, node.right] = [node.right, node.left];

        // Recursively invert the left and right subtrees
        dfs(node.left);
        dfs(node.right);
    };
    dfs(root);
    return root;
};

// // Testing
// // Creating a binary tree for testing
// const root = new TreeNode(4);
// root.left = new TreeNode(2);
// root.right = new TreeNode(7);
// root.left.left = new TreeNode(1);
// root.left.right = new TreeNode(3);
// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(9);

// // Inverting the binary tree
// const invertedRoot = invertBinaryTree(root);

// // Now invertedRoot should represent the inverted tree
// console.log(invertedRoot);