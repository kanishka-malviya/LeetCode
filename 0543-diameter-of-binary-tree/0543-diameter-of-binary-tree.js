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
var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    function dfs(root) {
        if (!root) {
            return 0;
        }

        let lh = dfs(root.left);
        let rh = dfs(root.right);

        diameter = Math.max(diameter, lh + rh);

        return 1 + Math.max(lh, rh);
    }

    dfs(root);
    return diameter;
};