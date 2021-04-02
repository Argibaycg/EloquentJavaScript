'use strict'

function sum(arrayToSum) {
    let total = 0;
    arrayToSum.forEach(number => {
        total += number
    });
    return total;
}

function range(from, to, step = 1) {
    let rangeArray = [];
    if (step < 0) {
        for (to; to >= from; to += step) {
            rangeArray.push(to);
        }
    } else {
        for (from; from <= to; from += step) {
            rangeArray.push(from);
        }
    }
    return rangeArray;
}

console.log(sum(range(1, 10, -1)))