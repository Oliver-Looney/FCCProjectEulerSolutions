export function getPrimeFactors(input: number) {
    let primeFactors = [];
    const primes = getPrimesUpToN(input);
    for (const prime of primes) {
        if (input % prime === 0) {
            primeFactors.push(prime);
        }
    }
    return primeFactors;
}

export function getPrimesUpToN(N: number) {
    let primes = [2, 3];
    for (let i = 5; i <= N; i += 2) {
        let j = 0;
        let flag = true;

        while (primes[j] <= Math.sqrt(i)) {
            if ((i % primes[j]) === 0) {
                flag = false;
            }
            j += 1
        }

        if (flag) {
            primes.push(i)
        }
    }
    return primes;
}

export function LargestPrimeFactorFunc(input: number) {
    const primeFactors = getPrimeFactors(input);
    return primeFactors[primeFactors.length - 1];
}
