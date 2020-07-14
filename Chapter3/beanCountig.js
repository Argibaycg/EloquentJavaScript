'use strict'

function countBs(stringInput) {
    return countChar(stringInput, 'B');
}

function countChar(stringInput, charToCount) {
    let count = 0;
    for (let i = 0; i < stringInput.length; i++) {
        if (stringInput[i] === charToCount)
            count++
    }
    return count;
}

console.log(countBs('BernardoBBB'));