import {
    getSquareOfSumToN,
    getSumOfSquaresToN,
    SumSquareDifferenceFunc
} from "./SumSquareDifference";
import assert from "assert";


describe("testing SquareOfSumToN func", () => {
    it("testing single digits", () => {
        assert.equal(getSumOfSquaresToN(2), 5);
        assert.equal(getSumOfSquaresToN(5), 55);
        assert.equal(getSumOfSquaresToN(9), 285);
    });
    it("testing double digits", () => {
        assert.equal(getSumOfSquaresToN(10), 385);
    });

});


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
