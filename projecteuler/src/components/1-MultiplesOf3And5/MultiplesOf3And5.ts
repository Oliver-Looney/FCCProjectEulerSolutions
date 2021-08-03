export function MultiplesOf3And5Func(maxNumber: number) {
    maxNumber--;


    return (finalCalc(maxNumber, 3) + finalCalc(maxNumber, 5) - finalCalc(maxNumber, 15));
}

export function finalCalc(maxNumber: number, multiple: number) {
    return (multiple * getSumUpToN(getMaxMultiple(maxNumber, multiple)));
}

export function getSumUpToN(N: number) {
    if (N >= 0) {
        return ((N + 1) * (N) / 2);
    } else {
        return -1;
    }
}

export function getMaxMultiple(maxNumber: number, multiple: number) {
    if (maxNumber >= 0) {
        return ((maxNumber - (maxNumber % multiple)) / multiple);
    } else {
        return -1;
    }
}
