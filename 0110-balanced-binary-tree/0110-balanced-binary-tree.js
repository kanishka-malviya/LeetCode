/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 function getHeight(node) {
    if (!node) {
        return 0;
    }

    let lh = getHeight(node.left);
    if (lh === -1) {
        return -1;
    }

    let rh = getHeight(node.right);
    if(rh === -1) {
        return -1;
    }

    if (Math.abs(lh - rh) > 1) {
        return -1;
    }

    return 1 + Math.max(lh, rh);
 }
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return getHeight(root) !== -1;
};