export function getPythagoreanA(m: number, n: number) {
    if (n > m) {
        return -1;
    }
    return (m ** 2 - n ** 2);
}

export function getPythagoreanB(m: number, n: number) {
    if (n > m) {
        return -1;
    }
    return (2 * m * n);
}

export function getPythagoreanC(m: number, n: number) {
    if (n > m) {
        return -1;
    }
    return (m ** 2 + n ** 2);
}

export function greatestCommonDivisor(input1: number, input2: number): number {
    return (input2 == 0 ? input1 : greatestCommonDivisor(input2, input1 % input2));
}

export function isRelativelyPrime(input1: number, input2: number) {
    return greatestCommonDivisor(input1, input2) == 1;
}


export function getNextPythagoreanTriple(m: number, n: number) {
    const a = getPythagoreanA(m, n);
    const b = getPythagoreanB(m, n);
    const c = getPythagoreanC(m, n);

    return [a, b, c];
}

export function SpecialPythagoreanTripletFunc(input: number) {
    const [a, b, c] = [3, 4, 5];
    let m = 2;
    let n = 1;
    while ((a + b + c) != input) {
        m++;
        for (n; n < m; n++) {
            const [a, b, c] = getNextPythagoreanTriple(3, 1);
            if (input % (a + b + c) === 0) {
                return (a * b * c * (input / (a + b + c)));
            }
        }
    }
    return (a * b * c);
}
