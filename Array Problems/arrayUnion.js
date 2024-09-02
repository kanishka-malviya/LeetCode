function arrayUnion(arr1, arr2) {
    let union = [];
    let j=i=0;

    if (arr1.length === 0 && arr2.length === 0) {
        return [];
    } 

    // Remove this if array is already sorted as will help to reduce time complexity
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            if (union.length === 0 || union[union.length - 1] != arr1[i]) {
                union.push(arr1[i]);
            }
            i++;
        } else {
            if (union.length === 0 || union[union.length - 1] != arr2[j]) {
                union.push(arr2[j]);
            }
            j++;
        }          
    }

    while( i < arr1.length) {
        if (union[union.length - 1] != arr1[i]) {
            union.push(arr1[i]);
        }
        i++;
    }

    while( j < arr2.length) {
        if (union[union.length - 1] != arr2[j]) {
            union.push(arr2[j]);
        }
        j++;
    }

    return union.length;

}

console.log(arrayUnion([2, 3, 3, 5, 7], [3, 4, 4, 4, 5]));
