/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = x;
    let str = num.toString();
    let l = 0;
    let r = str.length - 1;

    while (l < r) {
        if (str[l] === str[r]) {
            l++;
            r--;
        } else {
            return false;
        }
    }

    return true;
};