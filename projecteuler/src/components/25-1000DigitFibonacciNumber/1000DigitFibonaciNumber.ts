export function DigitFibonaciNumberFunc(nDigits: number) {
    let a = 1;
    let b = 1;
    let count = 2;
    let nextFib: number;
    do {
        nextFib = a + b;
        b = a;
        a = nextFib;
        count++;
    }
    while (nextFib.toString().length !== nDigits);
    return count;
}
