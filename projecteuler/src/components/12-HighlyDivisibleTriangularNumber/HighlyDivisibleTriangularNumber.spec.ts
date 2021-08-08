import assert from "assert";
import {
    getNthTriangularNumber,
    getNumOfDivisors,
    HighlyDivisibleTriangularNumberFunc
} from "./HighlyDivisibleTriangularNumber";


describe("Testing get num of divisors", () => {
    it("Testing 6", () => {
        assert.equal(getNumOfDivisors(6), 4);
    });
    it("Testing 10", () => {
        assert.equal(getNumOfDivisors(10), 4);
    });
    it("Testing 21", () => {
        assert.equal(getNumOfDivisors(21), 4);
    });
    it("Testing 28", () => {
        assert.equal(getNumOfDivisors(28), 6);
    });
});

describe("Testing Triangualr number formula", () => {
    it("Testing 6", () => {
        assert.equal(getNthTriangularNumber(3), 6);
    });
    it("Testing 10", () => {
        assert.equal(getNthTriangularNumber(4), 10);
    });
    it("Testing 21", () => {
        assert.equal(getNthTriangularNumber(6), 21);
    });
    it("Testing 28", () => {
        assert.equal(getNthTriangularNumber(7), 28);
    });
})


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
