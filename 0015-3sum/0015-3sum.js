/**
 * @param {number[]} num
 * @return {number[][]}
 */
function threeSum(arr) {
    let nums = arr.sort((a,b)=>a-b);
    let n = nums.length;
  let temp = [];

  for (let i = 0; i < n; i++) {
    let j = i + 1;
    let k = n - 1;
    
    if(i > 0 && nums[i] === nums[i-1]) {
      continue;
    }
    
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        temp.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        
        while(nums[j] === nums[j-1]) {
          j++;
        }
        
        while(nums[k] === nums[k+1]) {
          k--;
        }
      }
    }
  }
  
  return temp;
};