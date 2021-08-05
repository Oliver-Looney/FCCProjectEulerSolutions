import {
    nthPrimefunc
} from "./10001stPrime";
import assert from "assert";

describe("FCC tests", () => {
    it('should 6=>13', () => {
        assert.equal(nthPrimefunc(6), 13);
    });
    it('should 10=>29', () => {
        assert.equal(nthPrimefunc(10), 29);
    });
    it('should 100=>541', () => {
        assert.equal(nthPrimefunc(100), 541);
    });
    it('should 1000=>7919', () => {
        assert.equal(nthPrimefunc(1000), 7919);
    });
    it('should 10001=>104743', () => {
        assert.equal(nthPrimefunc(10001), 104743);
    });

});
