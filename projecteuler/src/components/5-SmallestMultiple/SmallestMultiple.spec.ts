import {
    SmallestMultipleFunc,
    getPrimeFactorsOfN,
    updateMap,
    getPrimeFactorsOfLCM,
    getExponentsOfDivisorI
} from "./SmallestMultiple";
import assert from "assert";

describe("Testing update Map", () => {

    it("Should add element if not in map", () => {
        let testMap = new Map();
        testMap = updateMap(testMap, 2, 1);
        assert.equal(testMap.has(2), true);
        assert.equal(testMap.get(2), 1);
        assert.equal(testMap.size, 1);
    });

    it("Should add element if not in map", () => {
        let testMap = new Map();
        testMap = updateMap(testMap, 3, 1);
        assert.equal(testMap.has(3), true);
        assert.equal(testMap.get(3), 1);
        assert.equal(testMap.size, 1);
    });

    it("Should keep old value if bigger", () => {
        let testMap = new Map();
        testMap = updateMap(testMap, 2, 5);
        testMap = updateMap(testMap, 2, 2);
        assert.equal(testMap.has(2), true);
        assert.equal(testMap.get(2), 5);
        assert.equal(testMap.size, 1);
    })
    it("Should add update element's value if in map", () => {
        let testMap = new Map();
        testMap = updateMap(testMap, 2, 1);
        testMap = updateMap(testMap, 2, 3);
        assert.equal(testMap.has(2), true);
        assert.equal(testMap.get(2), 3);
        assert.equal(testMap.size, 1);
    })
});


describe("Test getPrimeFactorsOfN", () => {
    it("should return the prime factors of 2", () => {
        const result = getPrimeFactorsOfN(2);
        assert.equal(result.has(2), true);
        assert.equal(result.get(2), 1);
        assert.equal(result.size, 1);
    });
    it("should return the prime factors of 3", () => {
        const result = getPrimeFactorsOfN(3);
        assert.equal(result.has(3), true);
        assert.equal(result.get(3), 1);
        assert.equal(result.size, 1);


    });
    it("should return the prime factors of 9", () => {
        const result = getPrimeFactorsOfN(9);
        assert.equal(result.has(3), true);
        assert.equal(result.get(3), 2);
        assert.equal(result.size, 1);


    });
    it("should return the prime factors of 4", () => {
        const result = getPrimeFactorsOfN(4);
        assert.equal(result.has(2), true);
        assert.equal(result.get(2), 2);
        assert.equal(result.size, 1);
    });
    it("should return the prime factors of 25", () => {
        const result = getPrimeFactorsOfN(25);
        assert.equal(result.has(5), true);
        assert.equal(result.get(5), 2);
        assert.equal(result.size, 1);
    });
    it("should return the prime factors of 60", () => {
        const result = getPrimeFactorsOfN(60);
        assert.equal(result.has(2), true);
        assert.equal(result.has(3), true);
        assert.equal(result.has(5), true);

        assert.equal(result.get(2), 2);
        assert.equal(result.get(3), 1);
        assert.equal(result.get(5), 1);
        assert.equal(result.size, 3);
    });
    it("should return the prime factors of 152460", () => {
        const result = getPrimeFactorsOfN(152460);
        assert.equal(result.has(2), true);
        assert.equal(result.has(3), true);
        assert.equal(result.has(5), true);
        assert.equal(result.has(7), true);
        assert.equal(result.has(11), true);

        assert.equal(result.get(2), 2);
        assert.equal(result.get(3), 2);
        assert.equal(result.get(5), 1);
        assert.equal(result.get(7), 1);
        assert.equal(result.get(11), 2);
    });
})

describe("testing getExponentsOfDivisorI", () => {

    it("testing 2 cubed", () => {
        let primes = new Map();
        let workingNumber = 8;
        const __ret = getExponentsOfDivisorI(workingNumber, 2, primes);
        workingNumber = __ret.workingNumber;
        primes = __ret.primes;
        assert.equal(workingNumber, 1);
        assert.equal(primes.size, 1);
        assert.equal(primes.get(2), 3);

    });
    it("testing 3 cubed", () => {
        let primes = new Map();
        let workingNumber = 27;
        const __ret = getExponentsOfDivisorI(workingNumber, 3, primes);
        workingNumber = __ret.workingNumber;
        primes = __ret.primes;
        assert.equal(workingNumber, 1);
        assert.equal(primes.size, 1);
        assert.equal(primes.get(3), 3);
    });
    it("testing 36", () => {
        let primes = new Map();
        let workingNumber = 36;
        let __ret = getExponentsOfDivisorI(workingNumber, 2, primes);
        workingNumber = __ret.workingNumber;
        primes = __ret.primes;
        assert.equal(workingNumber, 9);
        assert.equal(primes.size, 1);
        assert.equal(primes.get(2), 2);
        __ret = getExponentsOfDivisorI(workingNumber, 3, primes);
        workingNumber = __ret.workingNumber;
        primes = __ret.primes;
        assert.equal(workingNumber, 1);
        assert.equal(primes.size, 2);
        assert.equal(primes.get(3), 2);
        assert.equal(primes.get(2), 2);
    });

});


describe('Testing getPrimesOfLCM', () => {
    it("testing 7", () => {
        const result = getPrimeFactorsOfLCM(7);
        const resultIter = result.keys();
        assert.equal(resultIter.next().value, 7);
        assert.equal(resultIter.next().value, 2);
        assert.equal(resultIter.next().value, 3);
        assert.equal(resultIter.next().value, 5);

        assert.equal(result.size, 4);

    });
    it("testing 9", () => {
        const result = getPrimeFactorsOfLCM(9);
        const resultIter = result.keys();
        assert.equal(resultIter.next().value, 3);
        assert.equal(resultIter.next().value, 2);
        assert.equal(resultIter.next().value, 7);
        assert.equal(resultIter.next().value, 5);

        assert.equal(result.size, 4);

    });

    it("testing 3", () => {
        const result = getPrimeFactorsOfLCM(3);
        const resultIter = result.keys();
        assert.equal(resultIter.next().value, 3);
        //assert.equal(result.size, 1);
    });
    it("testing 6", () => {
        const result = getPrimeFactorsOfLCM(3);
        const resultIter = result.keys();
        const key1 = resultIter.next().value;
        assert.equal(key1, 3);
        assert.equal(result.get(key1), 1);
        const key2 = resultIter.next().value;
        assert.equal(result.get(key2), 1);
        assert.equal(result.size, 2);
    });

});

describe("FCC tests", () => {
    it("FCC's tests", () => {
        assert.equal(SmallestMultipleFunc(5), 60);
        assert.equal(SmallestMultipleFunc(7), 420);
        assert.equal(SmallestMultipleFunc(10), 2520);
        assert.equal(SmallestMultipleFunc(13), 360360);
        assert.equal(SmallestMultipleFunc(20), 232792560);
    });
});
