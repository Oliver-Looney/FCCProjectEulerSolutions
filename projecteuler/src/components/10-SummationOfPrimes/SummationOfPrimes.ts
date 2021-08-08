export function SummationOfPrimesFunc(input: number) {
    if (returningEdgeCases(input) !== -1) {
        return returningEdgeCases(input);
    }

    let total = 0;
    const primes = sieveOfErato(input);
    for (let i = 0; i < primes.length; i++) {
        total += primes[i];
    }
    return total;
}

export function sieveOfErato(max: number) {
    let sieve = new Array(max).fill(true);
    sieve[0] = false;
    sieve[1] = false;
    for (let i = 2; i <= Math.sqrt(max); i++) {
        if (sieve[i]) {
            for (let j = i ** 2; j < max; j += i) {
                sieve[j] = false;
            }
        }
    }
    const primes = sieve
        .map((element, index) => element === true ? index : -1)
        .filter(index => index !== -1);
    return primes;
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
