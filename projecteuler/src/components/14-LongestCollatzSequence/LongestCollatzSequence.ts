export function LongestCollatzSequenceFunc(limit: number) {
    let previousCollatzAttempts = new Map<number, number>();
    previousCollatzAttempts.set(1, 1);
    previousCollatzAttempts.set(2, 2);
    if (!previousCollatzAttempts.has(5)) {
        let n = 5;
        let count = 0;
        while (!previousCollatzAttempts.has(n)) {
            if (n % 2 === 0) {
                n = n / 2;
            } else {
                n = (3 * n) + 1;
            }
            count++;
        }
        // @ts-ignore
        previousCollatzAttempts.set(5, previousCollatzAttempts.get(n) + count);
    }

    return previousCollatzAttempts;
}
