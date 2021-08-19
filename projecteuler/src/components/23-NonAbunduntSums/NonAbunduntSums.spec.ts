import {getAbundantNumbersUpToN, getSumOfDivisors, NonAbunduntSumsFunc} from "./NonAbunduntSums";
import assert from "assert";


describe("Testing getAbundantNumbers", () => {
   it("11=>[]", () => {
      const result = getAbundantNumbersUpToN(11);
      assert.equal(result.length, 0);
   });
   it("13=>[12]", () => {
      const result = getAbundantNumbersUpToN(13);
      assert.equal(result.length, 1);
      assert.equal(result[0], 12);
   });
});


describe("Testing get sum of divisors", () => {
   it("Testing 6", () => {
      assert.equal(getSumOfDivisors(6), 6);
   });
   it("Testing 10", () => {
      assert.equal(getSumOfDivisors(10), 8);
   });
   it("Testing 220", () => {
      assert.equal(getSumOfDivisors(220), 284);
   });
   it("Testing 284", () => {
      assert.equal(getSumOfDivisors(284), 220);
   });
});

describe("FCC Tests", () => {
   it("10000=>3731004", () => {
      assert.equal(NonAbunduntSumsFunc(10000), 3731004);
   });
   it("15000=>4039939", () => {
      assert.equal(NonAbunduntSumsFunc(15000), 4039939);
   });
   it("20000=>4159710", () => {
      assert.equal(NonAbunduntSumsFunc(20000), 4159710);
   });
   it("28123=>4179871", () => {
      assert.equal(NonAbunduntSumsFunc(28123), 4179871);
   });
});
