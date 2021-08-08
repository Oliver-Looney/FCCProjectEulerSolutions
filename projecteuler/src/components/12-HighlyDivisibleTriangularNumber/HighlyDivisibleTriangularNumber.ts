export function getNumOfDivisors(currentTriangularNum: number) {
    let count = 0;
    for (let i = 1; i < (currentTriangularNum / 2) + 1; i++) {
        if (currentTriangularNum % i === 0) {
            count++;
        }
    }
    return count + 1;
}

export function getNthTriangularNumber(N: number) {
    return (N * (N + 1) / 2);
}


export function HighlyDivisibleTriangularNumberFunc(input: number) {
    let index = 1;
    while (true) {

        const currentTriangularNum = getNthTriangularNumber(index);
        if (getNumOfDivisors(currentTriangularNum) > input) {
            return currentTriangularNum;
        }
        index++;
    }
}
