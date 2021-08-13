export function getNumOfDivisors(testNumber: number) {
    let count = 0;
    for (let i = 1; i < Math.sqrt(testNumber); i++) {
        if (testNumber % i === 0) {
            count += 2;
        }
    }
    if (testNumber % Math.sqrt(testNumber) === 0) {
        count++;
    }
    return count;
}

export function getNthTriangularNumber(N: number) {
    return (N * (N + 1) / 2);
}

export function getABPairFromIndex(index: number) {
    if (index % 2 === 0) {
        return [index / 2, index + 1];
    } else {
        return [index, (index + 1) / 2];
    }
}

export function HighlyDivisibleTriangularNumberFunc(input: number) {
    let index = 0;
    let numOfDivisorsOfTriNum: number;
    let ABPair: number[];
    let previousCalc = new Map();
    do {
        index++;
        ABPair = getABPairFromIndex(index);
        for (let i = 0; i < 2; i++) {
            previousCalc = testIfInMap(previousCalc, ABPair[i]);
        }
        numOfDivisorsOfTriNum = previousCalc.get(ABPair[0]) + previousCalc.get(ABPair[1]) - 1 + ((previousCalc.get(ABPair[0]) - 1) * (previousCalc.get(ABPair[1]) - 1));
    }
    while (numOfDivisorsOfTriNum < input);
    return getNthTriangularNumber(index);
}

export function testIfInMap(previousCalc: Map<number, number>, numberToCalc: number) {
    if (!previousCalc.has(numberToCalc)) {
        previousCalc.set(numberToCalc, getNumOfDivisors((numberToCalc)));
    }
    return previousCalc;
}
