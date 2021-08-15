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

export function getAbundantNumbersUpToN(limit: number) {
    let abundantNumbers: number[] = [];
    for (let i = 12; i < limit; i++) {
        if (getSumOfDivisors(i) > i) {
            abundantNumbers.push(i);
        }
    }
    return abundantNumbers;
}

export function NonAbunduntSumsFunc(input: number) {
    const abundantNumbers = getAbundantNumbersUpToN(input + 1);
    return -1;
}
