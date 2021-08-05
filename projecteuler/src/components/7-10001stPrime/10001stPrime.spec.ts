import {
    nthPrimefunc,
    isPrime
} from "./10001stPrime";
import assert from "assert";

describe("testing isPrime func", () => {
    it("inputting 2", () => {
        assert.equal(isPrime(2), true);
    });
    it("inputting 3", () => {
        assert.equal(isPrime(3), true);
    });
    it("inputting 4", () => {
        assert.equal(isPrime(4), false);
    });
    it("inputting 5", () => {
        assert.equal(isPrime(5), true);
    });
    it("inputting 100", () => {
        assert.equal(isPrime(100), false);
    });


})


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
