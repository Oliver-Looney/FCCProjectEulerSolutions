export function PowerDigitSumFunc(exponent: number) {
    let result = 0;
    let mySumInArray = new Array<number>(Math.ceil(Math.log((2 ** exponent) + 1) / Math.LN10));
    let count = 1;
    mySumInArray[0] = 1;
    let carry = 0;
    do {
        carry = 0;
        for (let i = 0; i < mySumInArray.length; i++) {
            let oldValue = mySumInArray[i];
            if (typeof oldValue != "number") {
                oldValue = 0;
            }
            const newValue = (oldValue * 2) + carry;
            if (newValue >= 10) {
                mySumInArray[i] = (newValue % 10);
                carry = 1;
            } else {
                mySumInArray[i] = newValue;
                carry = 0;
            }
        }
        count++;
    }
    while (count <= exponent);
    for (let i = 0; i < mySumInArray.length; i++) {
        result += mySumInArray[i];
    }
    return result;
}
