import assert from "assert";
import {
    LargestPalindromeProductFunc,
    testPalindrome,
    getRange
} from "./LargestPalindromeProduct";

describe('Testing testPalindrome function', () => {
    it('should return true if the input is a palindrome, false if it is not', () => {
        assert.equal(testPalindrome(121), true);
        assert.equal(testPalindrome(122), false);
        assert.equal(testPalindrome(1223), false);
        assert.equal(testPalindrome(3223), true);
    });
});

describe("Testing Range Function", () => {
    it("should return max & min valid number for n length digits", () => {
        const result1 = getRange(2);
        assert.equal(result1[0], 11);
        assert.equal(result1[1], 99);
        const result2 = getRange(3);
        assert.equal(result2[0], 101);
        assert.equal(result2[1], 999);
    });
});

describe("FCC tests", () => {
    it("Running FCC's tests", () => {
        assert.equal(LargestPalindromeProductFunc(2), 9009);
        assert.equal(LargestPalindromeProductFunc(3), 906609);
    });
});
