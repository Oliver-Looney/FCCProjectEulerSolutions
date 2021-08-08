import {
    isPrime, returningEdgeCases, sieveOfErato,
    SummationOfPrimesFunc
} from "./SummationOfPrimes";
import assert from "assert";


describe("testing returningEdgeCases", () => {
    it("negative numbers", () => {
        assert.equal(returningEdgeCases(-1), 0);
    });
    it("0 ", () => {
        assert.equal(returningEdgeCases(0), 0);
    });
    it(" 2", () => {
        assert.equal(returningEdgeCases(2), 0);
    });
    it(" 3", () => {
        assert.equal(returningEdgeCases(3), 2);
    });
    it(" 4", () => {
        assert.equal(returningEdgeCases(4), -1);
    });
});


describe("testing isPrime", () => {
    it("testing 5", () => {
        assert.equal(isPrime(5, [2, 3]), true)
    });
    it("testing 6", () => {
        assert.equal(isPrime(6, [2, 3, 5]), false)
    });
    it("testing 7", () => {
        assert.equal(isPrime(7, [2, 3, 5]), true)
    });
    it("testing 8", () => {
        assert.equal(isPrime(8, [2, 3, 5, 7]), false)
    });
    it("testing 9", () => {
        assert.equal(isPrime(8, [2, 3, 5, 7]), false)
    });
});

describe("testing sieve of Eratosthenes", () => {
    it("testing up to 5", () => {
        const result = sieveOfErato(5);
        assert.equal(result[0], 2);
        assert.equal(result[1], 3);
        assert.equal(result[2], 5);
        assert.equal(result.length, 3);
    })
});

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
