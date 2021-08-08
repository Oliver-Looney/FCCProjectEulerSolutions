import {
    SummationOfPrimesFunc
} from "./SummationOfPrimes";
import assert from "assert";

describe("Running FCC tests", () => {
    it("17=>41", () => {
        assert.equal(SummationOfPrimesFunc(17), 41);
    });
    it("2001=>277050", () => {
        assert.equal(SummationOfPrimesFunc(2001), 277050);
    });
    it("140759=>873608362", () => {
        assert.equal(SummationOfPrimesFunc(140759), 873608362);
    });
    it("2000000=>142913828922", () => {
        assert.equal(SummationOfPrimesFunc(2000000), 142913828922);
    });

});
