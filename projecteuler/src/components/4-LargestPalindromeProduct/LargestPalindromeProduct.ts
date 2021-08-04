export function testPalindrome(numberBeingTested: number) {
    const reverse = +(numberBeingTested.toString().split("").reverse().join(""));
    return (numberBeingTested === reverse);
}

export function getRange(lengthOfNumber: number) {
    const max = (10 ** lengthOfNumber) - 1;
    const min = (10 ** (lengthOfNumber - 1)) + 1;
    return [min, max];
}

export function LargestPalindromeProductFunc(lengthOfNumber: number) {
    const [min, max] = getRange(lengthOfNumber);
    let maxProduct = 0;
    for (let i = max; i >= min; i--) {
        for (let j = i; j >= min; j--) {
            const product = i * j;
            if (product < maxProduct) {
                break;
            }
            if ((testPalindrome(product)) && (product > maxProduct)) {
                maxProduct = product;
            }
        }
    }
    return maxProduct;
}
