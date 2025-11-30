/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    if (!root) return;
    let max = -Infinity;

    function dfs(node) {
        if (!node) {
            return 0;
        }

        let lh = Math.max(0, dfs(node.left));
        let rh = Math.max(0, dfs(node.right));

        max = Math.max(max, node.val + lh + rh);

        return node.val + Math.max(lh, rh)
    }

    dfs(root);
    return max;
};