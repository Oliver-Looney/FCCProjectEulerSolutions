import {
    getSumUpToN,
    getMaxMultiple,
    finalCalc
} from "./MultiplesOf3And5"
import assert from "assert";

describe("Testing sum func", () => {
    it("test correct value", () => {
        assert.equal(getSumUpToN(3), 6);
    });
    it("test wrong value", () => {
        assert.notEqual(getSumUpToN(3), 5);
    })
    it("test data out of range", () => {
        assert.equal(getSumUpToN(-2), -1);
    })
});

describe("Testing maxMultiple func", () => {
    it("test correct value", () => {
        assert.equal(getMaxMultiple(10, 3), 3);
    });
    it("test wrong value", () => {
        assert.notEqual(getMaxMultiple(10, 3), 4);
    })
    it("test data out of range", () => {
        assert.equal(getMaxMultiple(-2, 2), -1);
    })
});

describe("Testing finalCalc func", () => {
    it("test correct value", () => {
        assert.equal(finalCalc(10, 3), 18);
    });
});
