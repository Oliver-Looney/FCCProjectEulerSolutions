function getFactorial(n: number) {
    let res = 1;
    for (let i = n; i > 1; i--) {
        const iArray = getNumberAsnumberArray(i);
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
