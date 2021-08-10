export function PowerDigitSumFunc(exponent: number) {
    const powerOfTwoString = getPowerOfTwo(exponent).toString();
    let result = 0;
    for (let i = 0; i < powerOfTwoString.length; i++) {
        result += parseInt(powerOfTwoString[i]);
    }
    return result;
}

export function getPowerOfTwo(exponent: number) {
    if (exponent === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        result *= 2;
    }
    return result;
}
