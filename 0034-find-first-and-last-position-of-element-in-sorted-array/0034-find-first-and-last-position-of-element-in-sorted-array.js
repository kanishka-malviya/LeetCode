function findFirst(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    var firstOccurence = -1;

    while (left <= right) {
        let mid = Math.floor((left + right)/2);
        if (nums[mid] === target) {
            firstOccurence = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return firstOccurence;
}

function findLast(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    var lastOccurrence = -1;

    while (left <= right) {
        let mid = Math.floor((left + right)/2);
        if (nums[mid] === target) {
            lastOccurrence = mid;
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return lastOccurrence;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return [findFirst(nums, target), findLast(nums, target)];
};