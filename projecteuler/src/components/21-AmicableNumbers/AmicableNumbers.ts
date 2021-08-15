function getMapOfNumbersBelowN(n: number) {
    let mapOfNumbersToSumOfProperDivisors = new Map<number, number>();
    for (let i = 1; i < n; i++) {
        mapOfNumbersToSumOfProperDivisors.set(i, getSumOfDivisors(i))
    }
    return mapOfNumbersToSumOfProperDivisors;
}

function getTotalOfPairs(n: number, mapOfNumbersToSumOfProperDivisors: Map<number, number>) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        const contentsOfI = mapOfNumbersToSumOfProperDivisors.get(i) as number;
        if (mapOfNumbersToSumOfProperDivisors.get(contentsOfI) === i) {
            if (contentsOfI !== i) {
                result = result + contentsOfI + i;
            }
        }
    }
    return result;
}

export function AmicableNumbersFunc(n: number) {
    const mapOfNumbersToSumOfProperDivisors = getMapOfNumbersBelowN(n);
    const result = getTotalOfPairs(n, mapOfNumbersToSumOfProperDivisors);
    return result / 2;
}

export function getSumOfDivisors(testNumber: number) {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(testNumber); i++) {
        if (testNumber % i === 0) {
            sum += i;
            sum += testNumber / i;
        }
    }
    return sum;
}

//memo sum of divisors to reduce time???
