import assert from "assert";
import {
    getNumOfDivisors,
    HighlyDivisibleTriangularNumberFunc
} from "./HighlyDivisibleTriangularNumber";


describe("Testing get num of divisors", () => {
    it("Testing 6", () => {
        assert.equal(getNumOfDivisors(6), 4);
    });
});

describe("Testing FCC tests", () => {
    it("5=>28", () => {
        assert.equal(HighlyDivisibleTriangularNumberFunc(5), 28);
    });
    it("23=>630", () => {
        assert.equal(HighlyDivisibleTriangularNumberFunc(23), 630);
    });
    it("167=>1385280", () => {
        assert.equal(HighlyDivisibleTriangularNumberFunc(167), 1385280);
    });
    it("374=>17907120", () => {
        assert.equal(HighlyDivisibleTriangularNumberFunc(374), 17907120);
    });
    it("500=>76576500", () => {
        assert.equal(HighlyDivisibleTriangularNumberFunc(500), 76576500);
    });
});
