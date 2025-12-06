function maxAmount(arr, index, dp) {
    if (index === 0) {
        return arr[0];
    }

    if (index < 0) {
        return 0;
    }

    if (dp[index] !== -1) {
        return dp[index];
    }

    let pick = arr[index] + maxAmount(arr, index - 2, dp);
    let notPick = 0 + maxAmount(arr, index - 1, dp);

    dp[index] = Math.max(pick, notPick);

    return dp[index];
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length;
    let dp = new Array(n).fill(-1);
    return maxAmount(nums, n-1, dp);

};