export function SummationOfPrimesFunc(input: number) {
    if (returningEdgeCases(input) != -1) {
        return returningEdgeCases(input);
    }
    let primes = [2, 3];

    let currentIndex = 6;
    while (input > currentIndex + 2) {
        if (isPrime(currentIndex - 1, primes)) {
            primes.push(currentIndex - 1);
        }
        if (isPrime(currentIndex + 1, primes)) {
            primes.push(currentIndex + 1);
        }
        currentIndex += 6;
    }
    let total = 0;
    for (let i = 0; i < primes.length; i++) {
        total += primes[i];
    }
    return total;
}


export function returningEdgeCases(input: number) {
    if (input < 3) {
        return 0;
    }
    if (input === 3) {
        return 2;
    } else {
        return -1;
    }
}

export function isPrime(testNumber: number, primes: number[]) {
    let count = 0;
    while (primes[count] <= Math.sqrt(testNumber)) {
        if (testNumber % primes[count] === 0) {
            return false;
        }
        count++;
    }
    return true;
}
