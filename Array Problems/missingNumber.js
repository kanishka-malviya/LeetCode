function missingNumberInArray(array) {
    let number = array.filter((value, index, array) => {
        if (index !== array.length-1 && Math.abs(array[index] - array[index + 1]) !== 1 ) {
            return true;
        }
    });

    return "Array Filter Approach " + (parseInt(number) + 1);
}

console.log(missingNumberInArray([1,3]));

//This is through summation approach can be used even for unsorted array
function missingNumber(array) {
    let n = array.length;
    let summation = (n * (n + 1)) / 2;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    console.log("Summation Approach", summation - sum);
}

missingNumber([3, 0, 1]);

// Through the xor approach reduces time compexity to O(n)
function missingNumberXOR(array) {
    let n = array.length;
    let XOR1;

    for (let i = 0; i <= n; i++) {
        XOR1 = XOR1 ^ i;

        if ( i < n) {
            XOR1 = XOR1 ^ array[i];
        }
    }

    console.log("XOR approach",XOR1);
}

missingNumberXOR([4, 5, 7, 8, 9]);
