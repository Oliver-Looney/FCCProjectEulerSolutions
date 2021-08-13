export function AmicableNumbersFunc(n: number) {
    let mapOfNumbersToSumOfProperDivisors = new Map<number, number>();
    for (let i = 0; i < n; i++) {
        mapOfNumbersToSumOfProperDivisors = testIfInMap(mapOfNumbersToSumOfProperDivisors, i);
    }
    
    return -1;
}

export function getSumOfDivisors(testNumber: number) {
    let sum = 0;
    for (let i = 1; i < Math.sqrt(testNumber); i++) {
        if (testNumber % i === 0) {
            sum += i;
        }
    }
    if (testNumber % Math.sqrt(testNumber) === 0) {
        sum += Math.sqrt(testNumber);
    }
    return sum;
}


export function testIfInMap(previousCalc: Map<number, number>, numberToCalc: number) {
    if (!previousCalc.has(numberToCalc)) {
        previousCalc.set(numberToCalc, getSumOfDivisors((numberToCalc)));
    }
    return previousCalc;
}
