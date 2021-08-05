export function getSumOfSquaresToN(input: number) {
    return -1;
}

export function SumSquareDifferenceFunc(input: number) {
    const squareOfSum = getSquareOfSumToN(input);
    const sumOfSquare = getSumOfSquaresToN(input);
    return sumOfSquare - squareOfSum;
}

export function getSquareOfSumToN(N: number) {
    return ((((N + 1) * N) / 2) ** 2);
}
