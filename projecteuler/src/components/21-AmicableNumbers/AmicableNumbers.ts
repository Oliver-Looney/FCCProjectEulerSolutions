function getMapOfNumbersBelowN(n: number) {
    let mapOfNumbersToSumOfProperDivisors = new Map<number, number>();
    for (let i = 0; i < n; i++) {
        mapOfNumbersToSumOfProperDivisors = testIfInMap(mapOfNumbersToSumOfProperDivisors, i);
    }
    return mapOfNumbersToSumOfProperDivisors;
}

function getTotalOfPairs(n: number, mapOfNumbersToSumOfProperDivisors: Map<number, number>) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        if (mapOfNumbersToSumOfProperDivisors.get(<number>mapOfNumbersToSumOfProperDivisors.get(i)) === i) {
            if (mapOfNumbersToSumOfProperDivisors.get(i) !== i) {
                result = result + <number>mapOfNumbersToSumOfProperDivisors.get(i) + i;
            }
        }
    }
    return result;
}

export function AmicableNumbersFunc(n: number) {
    let mapOfNumbersToSumOfProperDivisors = getMapOfNumbersBelowN(n);
    let result = getTotalOfPairs(n, mapOfNumbersToSumOfProperDivisors);
    return result / 2;
}

export function getSumOfDivisors(testNumber: number) {
    let sum = 0;
    for (let i = 1; i <= (testNumber / 2); i++) {
        if (testNumber % i === 0) {
            sum += i;
        }
    }
    return sum;
}

export function testIfInMap(previousCalc: Map<number, number>, numberToCalc: number) {
    if (!previousCalc.has(numberToCalc)) {
        previousCalc.set(numberToCalc, getSumOfDivisors((numberToCalc)));
    }
    return previousCalc;
}
