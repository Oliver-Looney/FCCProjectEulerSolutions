import assert from "assert";
import {getPowerOfTwo, PowerDigitSumFunc} from "./PowerDigitSum";


describe("testing get power of two", () => {
    it("2**(1)=>2", () => {
        assert.equal(getPowerOfTwo(1), 2);
    });
    it("2**(0)=>1", () => {
        assert.equal(getPowerOfTwo(0), 1);
    });
    it("2**(2)=>4", () => {
        assert.equal(getPowerOfTwo(2), 4);
    });
    it("2**(15)=>32768", () => {
        assert.equal(getPowerOfTwo(15), 32768);
    });
});


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
