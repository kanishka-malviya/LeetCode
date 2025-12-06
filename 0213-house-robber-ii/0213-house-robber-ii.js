function maxAmount(nums, ind, dp) {
    if (ind === 0) {
        return nums[ind];
    }

    if (ind < 0) {
        return 0;
    }

    if (dp[ind] !== -1) {
        return dp[ind];
    }

    let pick = nums[ind] + maxAmount(nums, ind - 2, dp);
    let nonPick = 0 + maxAmount(nums, ind - 1, dp);

    dp[ind] = Math.max(pick, nonPick);

    return dp[ind];
}

var rob = function(nums) {
    let n = nums.length;

    if (n === 1) {
        return nums[0];
    }

    if (n === 0) {
        return [];
    }
    let dp = new Array(n).fill(-1);
    let case1 = maxAmount(nums.slice(0, n-1), n-2, dp);

    dp = new Array(n).fill(-1);
    let case2 = maxAmount(nums.slice(1), n-2, dp);

    return Math.max(case1, case2);
};