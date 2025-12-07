/**
 * @param {number[]} height
 * @return {number}
 */
var largestRectangleArea = function(height) {
    let n = height.length;
    let stack = [];
    let maxArea = 0;

    for (let i = 0; i <= n; i++) {

        let currHeight = (i === n) ? 0 : height[i];

        while(stack.length && currHeight < height[stack[stack.length - 1]]) {
            let top = stack.pop();
            let h = height[top];
            let right = i;
            let left = stack.length ? stack[stack.length - 1] : -1;
            let width = right - left - 1;
            let area = h * width;

            maxArea = Math.max(maxArea, area);
        }

        stack.push(i);
    }

    return maxArea;
};