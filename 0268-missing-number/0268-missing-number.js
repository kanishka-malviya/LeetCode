/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(array) {
    let n = array.length;
    let summation = (n * (n + 1)) / 2;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return (summation - sum);
};