export function getSumOfSquaresToN(input: number) {
    let result = 0;

    for (let i = input; i > 0; i--) {
        result += i ** 2;
    }

    return result;
}

export function SumSquareDifferenceFunc(input: number) {
    const squareOfSum = getSquareOfSumToN(input);
    const sumOfSquare = getSumOfSquaresToN(input);
    return squareOfSum - sumOfSquare;
}

export function getSquareOfSumToN(N: number) {
    return ((((N + 1) * N) / 2) ** 2);
}
