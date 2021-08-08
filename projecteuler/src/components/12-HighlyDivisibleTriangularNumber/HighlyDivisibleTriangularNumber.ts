export function getNumOfDivisors(currentTriangularNum: number) {
    let count = 0;
    for (let i = 1; i < (currentTriangularNum / 2) + 1; i++) {
        if (currentTriangularNum % i) {
            count++;
        }
    }
    return count;
}

export function HighlyDivisibleTriangularNumberFunc(input: number) {
    let currentTriangularNum = 1;
    let counter = 2;
    let currentNumOfDivisors = 0;
    let index = 1;
    do {
        currentNumOfDivisors = getNumOfDivisors(currentTriangularNum);
        currentTriangularNum += counter;
        counter += index;
        index++;
    }
    while (currentNumOfDivisors <= input);
    return currentTriangularNum
}
