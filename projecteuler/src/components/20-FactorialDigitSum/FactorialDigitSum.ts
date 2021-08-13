import bigInt from "big-integer";

function getFactorial(n: number) {
    let res = bigInt(1);
    for (let i = n; i > 1; i--) {
        let j = bigInt(i);
        res = res.multiply(j);
    }
    return res.toString();
}


export function FactorialDigitSumFunc(n: number) {
    let res = getFactorial(n);
    let total = 0;
    for (let i = 0; i < res.length; i++) {
        total += parseInt(res[i]);
    }
    return total;
}
