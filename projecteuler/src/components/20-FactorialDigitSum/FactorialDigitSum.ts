function getFactorial(n: number) {
    let res = 1;
    for (let i = n; i > 1; i--) {
        res *= i
    }
    return res;
}

//export function getABasString(A)


function addAsGo(currentWorkingOutArray: number[], workingOutArrays: number[]) {
    let carry = 0;
    let tempRes: number;
    if (currentWorkingOutArray.length > workingOutArrays.length) {
        for (let i = 0; i < workingOutArrays.length; i++) {
            tempRes = currentWorkingOutArray[i] + workingOutArrays[i] + carry;
            carry = 0;
            if (tempRes < 10) {
                workingOutArrays[i] = tempRes;
            } else {
                workingOutArrays[i] = tempRes % 10;
                carry = (tempRes - tempRes % 10) / 10;
            }
        }
        for (let i = workingOutArrays.length; i < currentWorkingOutArray.length; i++) {
            workingOutArrays.push(currentWorkingOutArray[i]);
        }
    }
    return workingOutArrays;
}

export function multiplyAxB(A: number[], B: number[]) {
    let result: number[];
    let carry = 0;
    let workingOutArrays: number[] = [];
    for (let i = 0; i < B.length; i++) {
        let currentWorkingOutArray = [];
        for (let j = 0; j < i; j++) {
            currentWorkingOutArray.push(0);
        }
        for (let j = 0; j < A.length; j++) {
            const tempRes = B[i] * A[j] + carry;
            if (tempRes < 10) {
                currentWorkingOutArray.push(tempRes);
                carry = 0;
            } else {
                currentWorkingOutArray.push(tempRes % 10);
                carry = (tempRes - tempRes % 10) / 10;
            }
        }
        if (carry > 0) {

            currentWorkingOutArray.push(carry);
            carry = 0;
        }
        if (currentWorkingOutArray.length > workingOutArrays.length) {
            workingOutArrays = addAsGo(currentWorkingOutArray, workingOutArrays);
        } else {
            workingOutArrays = addAsGo(workingOutArrays, currentWorkingOutArray);
        }


    }

    return workingOutArrays;
}


export function FactorialDigitSumFunc(n: number) {
    let res = getFactorial(n).toString();
    let total = 0;
    for (let i = 0; i < res.length; i++) {
        total += parseInt(res[i]);
    }
    return total;
}
