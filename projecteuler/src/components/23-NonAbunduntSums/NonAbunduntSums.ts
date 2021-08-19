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

    const limit = input;
    let abundant: number[] = [];
    const primes = getPrimes(limit);


//find all abundant numbers
    for (let i = 2; i <= limit; i++) {
        if (sumOfFactorsPrime(i, primes) > i) {
            abundant.push(i);
        }
    }

    let canBeWrittenAsAbundant: boolean[] = new Array(limit + 1);
    for (let i = 0; i < abundant.length; i++) {
        for (let j = i; j < abundant.length; j++) {
            if (abundant[i] + abundant[j] <= limit) {
                canBeWrittenAsAbundant[abundant[i] + abundant[j]] = true;
            } else {
                break;
            }
        }
    }

    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        if (!canBeWrittenAsAbundant[i]) {
            sum += i;
        }
    }
    return sum;
}


function getPrimes(maxNumber: number) {
    let primes: number[] = [];
    let numbersCrossedOff = new Map<number, boolean>();

    for (let i = 2; i <= maxNumber; i++) {
        if (!numbersCrossedOff.has(i)) {
            primes.push(i);
            numbersCrossedOff.set(i, true);
            for (let j = i ** i; j < maxNumber; j += i) {
                numbersCrossedOff.set(j, false);
            }
        }
    }
    return primes;
}


function sumOfFactorsPrime(i: number, primes: number[]) {
    let n = i;
    let sum = 1;
    let currentPrime = primes[0];
    let j: number;
    let count = 0;
    if (n < 4) {
        return 1;
    }
    while (currentPrime * currentPrime <= n && n > 1 && count < primes.length) {
        currentPrime = primes[count];
        count++;
        if (n % currentPrime === 0) {
            j = currentPrime * currentPrime;
            n = n / currentPrime;
            while (n % currentPrime === 0) {
                j = j * currentPrime;
                n = n / currentPrime;
            }
            sum = sum * (j - 1) / (currentPrime - 1);
        }
    } //A prime factor larger than the square root remains if (n > 1)//
    if (n > 1) {
        sum = sum * (n + 1);
    }
    return sum - i;
}


