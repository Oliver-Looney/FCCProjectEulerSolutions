import assert from "assert";
import {PowerDigitSumFunc} from "./PowerDigitSum";


describe("FCC tests", () => {
    it("15=>26", () => {
        assert.equal(PowerDigitSumFunc(15), 26);
    });
    it("128=>166", () => {
        assert.equal(PowerDigitSumFunc(128), 166);
    });
    it("1000=>1366", () => {
        assert.equal(PowerDigitSumFunc(1000), 1366);
    });
});
