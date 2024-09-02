function moveZeroes(a) {
    let j = -1;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === 0) {
            j = i;
            break;
        }
    }

    if (j === -1) {
        return a;
    }

    for (let i = j + 1; i < a.length; i++) {
        if (a[i] != 0 ) {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
            j++;
        }
    }

    return a;
}

let result = moveZeroes([4, 9, 0, 2, 0, 3, 0, 8]);
console.log(result);
