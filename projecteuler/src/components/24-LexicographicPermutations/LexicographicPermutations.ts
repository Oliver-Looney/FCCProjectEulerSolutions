export function LexicographicPermutationsFunc(input: number) {
    let elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let currentIndex: number;
    let result = "";
    currentIndex = getNextElementOfNthPerm(input, elements);
    result += elements[currentIndex].toString();
    elements = elements.filter(num => num !== currentIndex);
    currentIndex = getNextElementOfNthPerm(input, elements);
    result += elements[currentIndex % elements.length].toString();
    return parseInt(result);
}

export function getNextElementOfNthPerm(input: number, elements: number[]) {
    const index = Math.round(input / getFactorial(elements.length - 1)) - 1;
    return index;
}

export function getFactorial(start: number) {
    let sum = 1;
    while (start > 1) {
        sum *= start;
        start--;
    }
    return sum;
}
