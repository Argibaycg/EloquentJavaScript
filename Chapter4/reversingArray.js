'use strict'

function reverseArray(arrayToReverse) {
    let reverseArray = [];
    arrayToReverse.forEach(element => {
        reverseArray.unshift(element);
    });
    return reverseArray;
}

function reverseArrayInPlace(arrayToReverse) {
    for (let i = 0; i < Math.floor(arrayToReverse.length / 2); i++) {
        let old = arrayToReverse[i];
        arrayToReverse[i] = arrayToReverse[arrayToReverse.length - 1 - i];
        arrayToReverse[arrayToReverse.length - 1 - i] = old;
    }
    return arrayToReverse;
}

console.log(reverseArray([1, 2, 3]))

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]))
