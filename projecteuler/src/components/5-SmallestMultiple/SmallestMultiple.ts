export function updateMap(map: Map<number, number>, key: number, value: number, add = false) {
    if (map.has(key)) {
        if (add) {
            // @ts-ignore
            map.set(key, (map.get(key) + 1));
        }
        // @ts-ignore
        else if (map.get(key) < value) {
            map.set(key, value);
            return map;
        } else {
            return map;
        }
    } else {
        map.set(key, value);
        return map;
    }

}

export function getExponentsOfDivisorI(workingNumber: number, i: number, primes: Map<any, any>) {
    let count = 0;
    while (workingNumber % i === 0) {
        count++;
        workingNumber = workingNumber / i;
    }
    if (count > 0) {
        primes = updateMap(primes, i, count);
    }
    return {workingNumber, primes};
}

export function getPrimeFactorsOfN(N: number) {
    let primes = new Map();
    let workingNumber = N;


    const __ret = getExponentsOfDivisorI(workingNumber, 2, primes);
    workingNumber = __ret.workingNumber;
    primes = __ret.primes;

    for (let i = 3; i <= Math.sqrt(workingNumber) + 1; i += 2) {
        const __ret = getExponentsOfDivisorI(workingNumber, i, primes);
        workingNumber = __ret.workingNumber;
        primes = __ret.primes;
    }
    if (workingNumber > 2) {

        primes = updateMap(primes, workingNumber, 1, true);
    }
    return primes;
}


export function getPrimeFactorsOfLCM(input: number) {
    let primesOfLCM = new Map();
    for (let i = input; i > 1; i--) {
        const primesOfI = getPrimeFactorsOfN(i);
        primesOfI.forEach((value: number, key: number) => {
            primesOfLCM = updateMap(primesOfLCM, key, value);
        });
    }
    return primesOfLCM;
}

export function SmallestMultipleFunc(input: number) {
    let primesOfLCM = getPrimeFactorsOfLCM(input);
    let total = 1;
    primesOfLCM.forEach((value: number, key: number) => {
        total = total * (key ** value);
    });
    return total;
}
