export function SpecialPythagoreanTripletFunc(input: number) {
    for (let m = 2; m > 0; m++) {
        for (let n = 1; n < m; n++) {
            //if (IsRelativelyPrimeTo(m, n)) {
            const [a, b, c] = calcTripleFromMN(m, n);
            const total = a + b + c;
            if (input % total == 0) {
                const product = (a * b * c) * (input / total) ** 3;
                return product;
            }
            //}
        }
    }
    return -1
}

export function calcTripleFromMN(m: number, n: number) {
    return ([(2 * m * n), (m ** 2 - n ** 2), (m ** 2 + n ** 2)]);
}

export function GreatestCommonDivisor(m: number, n: number): number {
    return (n === 0 ? m : GreatestCommonDivisor(n, m % n));
}

export function IsRelativelyPrimeTo(m: number, n: number) {
    return GreatestCommonDivisor(m, n) === 1;
}
