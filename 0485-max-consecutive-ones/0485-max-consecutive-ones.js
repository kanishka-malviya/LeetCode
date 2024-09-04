/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(array) {
    let max = 0;
    let currentMax = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            currentMax++;
        } else {
            max = Math.max(max, currentMax);
            currentMax = 0;
        }
    }
    return Math.max(max, currentMax);
};