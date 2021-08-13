import {FactorialDigitSumFunc, multiplyAxB} from "./FactorialDigitSum";
import assert from "assert";


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
