export function LexicographicPermutationsFunc(input: number) {

    return -1;
}

export function getFirstElementOfNthPerm(input: number, elements: number[]) {
    return elements[Math.round(input / getFactorial(elements.length - 1)) - 1];
}

export function getFactorial(start: number) {
    let sum = 1;
    while (start > 1) {
        sum *= start;
        start--;
    }
    return sum;
}
