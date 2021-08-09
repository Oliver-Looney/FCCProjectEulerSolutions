export function LongestCollatzSequenceFunc(limit: number) {
    let previousCollatzAttempts = new Map<number, number>();
    previousCollatzAttempts.set(1, 1);
    previousCollatzAttempts.set(2, 2);
    for (let i = 1; i < limit; i++) {
        if (!previousCollatzAttempts.has(i)) {
            let n = i;
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
            previousCollatzAttempts.set(i, previousCollatzAttempts.get(n) + count);
        }
    }
    return getKeyOfMaxValue(previousCollatzAttempts);
}

export function getKeyOfMaxValue(myMap: Map<number, number>) {
    let maxValue = 0;
    let keyOfMaxValue = 0;
    //JS: for (const [key, value] of myMap.entries()) {
    // @ts-ignore
    for (let [key, value] of myMap) {
        if (value > maxValue) {
            maxValue = value;
            keyOfMaxValue = key;
        }
    }
    return keyOfMaxValue;
}
