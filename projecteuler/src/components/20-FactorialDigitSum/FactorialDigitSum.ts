export function getNumberAsNumberArray(inputNumber: number) {
    const tempStringArray = inputNumber.toString().split("").reverse();
    let result = [];
    for (let i = 0; i < tempStringArray.length; i++) {
        result.push(parseInt(tempStringArray[i]));
    }
    return result;
}

export function addAB(result: number[], iArray: number[]) {
    let carry = 0;
    for (let i = 0; i < iArray.length; i++) {
        const tempAdd = result[i] + iArray[i] + carry;
        if (tempAdd < 10) {
            carry = 0;
            result[i] = tempAdd;
        } else {
            result[i] = tempAdd % 10;
            carry = 1;
        }
    }
    if (carry === 1) {
        result.push(carry);
    }
    return result;
}

function multiplyAxB(oldRes: number[], iArray: number[]) {
    let result = oldRes;
    for (let i = 0; i < iArray.length; i++) {
        result = addAB(result, iArray);
    }
    return [-1];
}

function getFactorial(n: number) {
    let res = [1];
    for (let i = n; i > 1; i--) {
        const iArray = getNumberAsNumberArray(i);
        res = multiplyAxB(res, iArray);
    }
    return res;
}


export function FactorialDigitSumFunc(n: number) {
    let res = getFactorial(n).toString();
    let total = 0;
    for (let i = 0; i < res.length; i++) {
        total += parseInt(res[i]);
    }
    return total;
}
