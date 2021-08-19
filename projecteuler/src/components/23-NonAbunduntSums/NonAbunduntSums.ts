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
    //return  abundantNumbers;
    let total = 0;
    for (let i = 23; i < input; i++) {
        let flag = true;
        let j = 0;
        while (flag && j <= (abundantNumbers.length / 2)) {
            if (abundantNumbers.includes(i - abundantNumbers[j])) {
                flag = false;
            }
            j++;
        }
        //return flag;
        if (flag) {
            total += i;
        }
    }
    return total;
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
