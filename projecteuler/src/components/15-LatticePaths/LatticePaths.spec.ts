import {LatticePathsFunc} from "./LatticePaths";
import assert from "assert";

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
