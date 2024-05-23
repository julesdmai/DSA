/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // Recursive function to find the LCA
    const findLCA = (node) => {
        // Base case: if the current node is null, return null
        if (!node) return null;
        
        // If the current node is either p or q, return the node
        if (node === p || node === q) return node;
        
        // Recursively find LCA in the left and right subtrees
        const leftLCA = findLCA(node.left);
        const rightLCA = findLCA(node.right);
        
        // If both subtrees return non-null, current node is the LCA
        if (leftLCA && rightLCA) return node;
        
        // Otherwise, return the non-null value from left or right subtree
        return leftLCA ? leftLCA : rightLCA;
    }
    
    // Start the recursion from the root
    return findLCA(root);
}; 