/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(array) {
    let XOR = 0;
    for (let i = 0; i < array.length; i++) {
        XOR ^= array[i];
    }

    return XOR;
};