function getMapOfNumbersBelowN(n: number) {
    let mapOfNumbersToSumOfProperDivisors = new Map<number, number>();
    for (let i = 0; i < n; i++) {
        mapOfNumbersToSumOfProperDivisors = testIfInMap(mapOfNumbersToSumOfProperDivisors, i);
    }
    return mapOfNumbersToSumOfProperDivisors;
}

export function AmicableNumbersFunc(n: number) {
    let mapOfNumbersToSumOfProperDivisors = getMapOfNumbersBelowN(n);
    let result = 0;
    for (let i = 0; i < n; i++) {
        const checkI = mapOfNumbersToSumOfProperDivisors.get(i);
        if (mapOfNumbersToSumOfProperDivisors.get(<number>checkI) === i) {
            if (checkI !== i) {
                result = result + <number>checkI + i;
            }
        }
    }
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
