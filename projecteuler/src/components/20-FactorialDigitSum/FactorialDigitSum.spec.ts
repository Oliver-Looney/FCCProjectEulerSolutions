import {FactorialDigitSumFunc} from "./FactorialDigitSum";
import assert from "assert";


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
