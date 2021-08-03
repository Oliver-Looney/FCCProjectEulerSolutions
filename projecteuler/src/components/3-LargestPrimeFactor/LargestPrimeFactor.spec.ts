import {
    getPrimesUpToN,
    getPrimeFactors,
    LargestPrimeFactorFunc
} from "./LargestPrimeFactor";
import assert from "assert";

describe("Testing getPrimesUpToN", () => {
    it("testing correct values", () => {
        const response = getPrimesUpToN(10);
        assert.equal(response[0], 2);
        assert.equal(response[1], 3);
        assert.equal(response[2], 5);
        assert.equal(response[3], 7);
        assert.equal(response.length, 4);
    });
});

describe("testing getPrimeFactors", () => {
    it("testing correct values", () => {
        const primeFactors = getPrimeFactors(30);
        assert.equal(primeFactors.length, 3);
        assert.equal(primeFactors[0], 2);
        assert.equal(primeFactors[1], 3);
        assert.equal(primeFactors[2], 5);

    });
});


describe("FCC tests", () => {
    it("calling FCC's tests", () => {
        assert.equal(LargestPrimeFactorFunc(2), 2);
        assert.equal(LargestPrimeFactorFunc(3), 3);
        assert.equal(LargestPrimeFactorFunc(5), 5);
        assert.equal(LargestPrimeFactorFunc(7), 7);
        assert.equal(LargestPrimeFactorFunc(8), 2);
        assert.equal(LargestPrimeFactorFunc(13195), 29);
    });
});
