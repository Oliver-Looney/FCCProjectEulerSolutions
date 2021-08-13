import {
    addAB,
    FactorialDigitSumFunc,
    getNumberAsNumberArray
    , multiplyAxB
} from "./FactorialDigitSum";
import assert from "assert";


describe("testing adding function", () => {
    it("[2],[2]=>[4]", () => {
        const result = addAB([2], [2])
        assert.equal(result.length, 1);
        assert.equal(result[0], 4);
    });
    it("[5],[5]=>[0,1]", () => {
        const result = addAB([5], [5])

        assert.equal(result.length, 2);
        assert.equal(result[0], 0);
        assert.equal(result[1], 1);
    });
    it("[5,1],[6,1]=>[1,3]", () => {
        const result = addAB([5, 1], [6, 1])
        assert.equal(result.length, 2);
        assert.equal(result[0], 1);
        assert.equal(result[1], 3);
    });
    it("[2,5,1],[6,1]=>[8,6,1]", () => {
        const result = addAB([2, 5, 1], [6, 1])
        //assert.equal(result,[]);
        assert.equal(result.length, 3);
        assert.equal(result[0], 8);
        assert.equal(result[1], 6);
        assert.equal(result[2], 1);
    });
});

describe("Testing getNumberAsNumberArray", () => {
    it("2=>[2]", () => {
        const result = getNumberAsNumberArray(2);
        assert.equal(result.length, 1);
        assert.equal(result[0], 2);
    });
    it("10=>[0,1]", () => {
        const result = getNumberAsNumberArray(10);
        assert.equal(result.length, 2);
        assert.equal(result[0], 0);
        assert.equal(result[1], 1);
    });
    it("100=>[0,0,1]", () => {
        const result = getNumberAsNumberArray(100);
        assert.equal(result.length, 3);
        assert.equal(result[0], 0);
        assert.equal(result[1], 0);
        assert.equal(result[2], 1);
    });
});


describe("Testing multiplying function", () => {
    it("2x3=>", () => {
        assert.equal(multiplyAxB([2], [3]), [6])
    });
    it("2x6=>", () => {
        assert.equal(multiplyAxB([2], [6]), [1, 2])
    });
    it("5x7=>", () => {
        assert.equal(multiplyAxB([5], [7]), [3, 5])
    });
    it("50x7=>", () => {
        assert.equal(multiplyAxB([5, 0], [7]), [3, 5, 0])
    });
    it("51x7=>", () => {
        assert.equal(multiplyAxB([5, 1], [7]), [3, 5, 7])
    });
    it("50x70=>", () => {
        assert.equal(multiplyAxB([5, 0], [7, 0]), [3, 5, 0, 0])
    });
});


describe("FCC Tests", () => {
    it("10=>27", () => {
        assert.equal(FactorialDigitSumFunc(10), 27);
    });
    it("25=>72", () => {
        assert.equal(FactorialDigitSumFunc(25), 72);
    });
    it("50=>216", () => {
        assert.equal(FactorialDigitSumFunc(50), 216);
    });
    it("75=>432", () => {
        assert.equal(FactorialDigitSumFunc(75), 432);
    });
    it("100=>648", () => {
        assert.equal(FactorialDigitSumFunc(100), 648);
    });
});
