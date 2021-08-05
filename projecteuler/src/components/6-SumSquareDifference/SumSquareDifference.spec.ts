import {
    getSquareOfSumToN,
    SumSquareDifferenceFunc
} from "./SumSquareDifference";
import assert from "assert";


describe("testing getSquareOfSumToN func", () => {
    it("single digits", () => {
        assert.equal(getSquareOfSumToN(2), 9);
        assert.equal(getSquareOfSumToN(5), 225);
        assert.equal(getSquareOfSumToN(9), 2025);
    });
    it("double digits", () => {
        assert.equal(getSquareOfSumToN(10), 3025);
    });
});


describe("FCC tests", () => {
    it("10=>2640", () => {
        assert.equal(SumSquareDifferenceFunc(10), 2640);
    });
    it("20=>41230", () => {
        assert.equal(SumSquareDifferenceFunc(20), 41230);
    });
    it("100=>25164150", () => {
        assert.equal(SumSquareDifferenceFunc(100), 25164150);
    });
});
