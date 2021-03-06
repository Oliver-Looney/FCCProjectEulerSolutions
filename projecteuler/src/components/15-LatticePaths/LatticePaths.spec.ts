import {getBinomialCoefficient, LatticePathsFunc} from "./LatticePaths";
import assert from "assert";


describe("Testing get binomial coeff", () => {
    it("10,2=>45", () => {
        assert.equal(getBinomialCoefficient(10, 2), 45);
    })
});


describe("FCC tests", () => {
    it("2=>6", () => {
        assert.equal(LatticePathsFunc(2), 6);
    });
    it("4=>70", () => {
        assert.equal(LatticePathsFunc(4), 70);
    });
    it("9=>48620", () => {
        assert.equal(LatticePathsFunc(9), 48620);
    });
    it("20=>137846528820", () => {
        assert.equal(LatticePathsFunc(20), 137846528820);
    });
});
