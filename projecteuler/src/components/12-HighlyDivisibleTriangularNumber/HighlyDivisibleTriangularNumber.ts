export function getNumOfDivisors(currentTriangularNum: number) {
    let count = 0;
    for (let i = 1; i < (currentTriangularNum / 2) + 1; i++) {
        if (currentTriangularNum % i === 0) {
            count++;
        }
    }
    return count + 1;
}

export function getNthTriangularNumber(N: number) {
    return (N * (N + 1) / 2);
}

function getNumOfDivisorsOfABProduct(numOfDivisorsOfA: number, numOfDivisorsOfB: number) {
    numOfDivisorsOfA = numOfDivisorsOfA - 1;
    numOfDivisorsOfB = numOfDivisorsOfB - 1;
    let count = 0;
    for (let i = 0; i < numOfDivisorsOfA; i++) {
        for (let j = 0; j < numOfDivisorsOfB; j++) {
            count++;
        }
    }
    return count;
}

export function HighlyDivisibleTriangularNumberFunc(input: number) {
    let index = 0;
    let numOfDivisorsOfTriNum = 0;
    let numOfDivisorsOfA = 0;
    let numOfDivisorsOfB = 0;
    do {
        index++;
        if (index % 2 === 0) {
            numOfDivisorsOfA = getNumOfDivisors(index / 2);
            numOfDivisorsOfB = getNumOfDivisors(index + 1);
        } else {
            numOfDivisorsOfA = getNumOfDivisors(index);
            numOfDivisorsOfB = getNumOfDivisors((index + 1) / 2);
        }

        numOfDivisorsOfTriNum = numOfDivisorsOfA + numOfDivisorsOfB - 1 + getNumOfDivisorsOfABProduct(numOfDivisorsOfA, numOfDivisorsOfB);
    }
    while (numOfDivisorsOfTriNum < input);
    return getNthTriangularNumber(index)
}
