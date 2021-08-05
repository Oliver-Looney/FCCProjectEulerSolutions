export function nthPrimefunc(input: number) {
    if (input === 2) {
        return 1;
    }
    if (input === 3) {
        return 2;
    }
    let currentNthPrime = 2;
    let count = 5;
    while (currentNthPrime != input) {
        if (isPrime(count)) {
            currentNthPrime++;
            if (currentNthPrime === input) {
                return count;
            }
        }
        count++;
    }
}

export function isPrime(testNumber: number) {
    let divisor = 2;
    while (divisor <= Math.sqrt(testNumber)) {
        if (testNumber % divisor === 0) {
            return false;
        }
        divisor += 1
    }
    return true;
}
