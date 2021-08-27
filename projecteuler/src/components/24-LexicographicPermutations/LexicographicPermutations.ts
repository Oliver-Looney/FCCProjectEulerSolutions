export function LexicographicPermutationsFunc(input: number) {
    let elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = [];
    let j: number;
    let i = 0;
    while (i < 9) {
        [input, j] = countFirstXPerms(input, getFactorial(9 - i));
        result.push(elements[j]);
        elements = removeElement(elements, j);
        i++;
        //lifesaver
        if (input === 0) {
            break;
        }
    }
    for (let i = 0; i < elements.length; i++) {
        result.push(elements[i]);
    }
    return (parseInt(result.join("")));
}

function countFirstXPerms(input: number, numberOfPerms: number) {
    const x = input;
    let count = 0;
    do {
        input -= numberOfPerms;
        count++;
    }
    while (input - numberOfPerms >= 0);
    if (x % numberOfPerms === 0) {
        return [0, count];
    }
    return [input, count];
}

function removeElement(elements: number[], indexToRemove: number) {
    let newElements = [];
    for (let i = 0; i < elements.length; i++) {
        if (i !== indexToRemove) {
            newElements.push(elements[i]);
        }
    }
    return newElements;
}

export function getFactorial(start: number) {
    let sum = 1;
    while (start > 1) {
        sum *= start;
        start--;
    }
    return sum;
}
