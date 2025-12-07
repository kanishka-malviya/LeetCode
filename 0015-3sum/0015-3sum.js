/**
 * @param {number[]} num
 * @return {number[][]}
 */
function threeSum(num) {
    let nums = num.sort((a,b) => a - b);
    let n = nums.length;
    let ans = [];

    for (let i = 0; i < n; i++) {
        let left = i + 1;
        let right = n - 1;
        
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                ans.push([nums[i], nums[left], nums[right]])
                left++;
                right--;

                while(left<right && nums[left]===nums[left-1]) {
                    left++;
                }

                while(left<right && nums[right]===nums[right+1]) {
                    right--;
                }
            }

            if (sum < 0) {
                left++;
            }

            if (sum > 0) {
                right--;
            }
        }
    }

    return ans;
};