export function LargeSumFunc(numbersArray: string[]) {
    let sum = 0;
    for (let number of numbersArray) {
        sum += parseInt(number.slice(0, 11));
    }
    return parseInt(sum.toString().slice(0, 10));
}
