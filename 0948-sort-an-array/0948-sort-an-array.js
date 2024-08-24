function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; 
    }
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid); //left array
    let right = arr.slice(mid); //right array   

    let sortedArrayMerged = merge(mergeSort(left), mergeSort(right));

    return sortedArrayMerged;
}

function merge(left, right) {
    let temp = [];
    let leftindex = 0;
    let rightindex = 0;

    while(leftindex < left.length && rightindex < right.length) {
        if (left[leftindex] < right[rightindex]) {
            temp.push(left[leftindex]);
            leftindex++;
        } else {
            temp.push(right[rightindex]);
            rightindex++;
        }
    }

    let sortedArray = temp.concat(left.slice(leftindex)).concat(right.slice(rightindex));

    return sortedArray;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let result = mergeSort(nums);
    return result;
};