/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let temp = [];
    let n = nums.length;
    k = k % n;
    let start = n - k;

    for (let i = start; i < n; i++) {
        temp.push(nums[i]);
    }

    for (let j = 0; j < start; j++) {
        temp.push(nums[j]);
    }

    for (let i = 0; i < n; i++) {
        nums[i] = temp[i];
    }
};