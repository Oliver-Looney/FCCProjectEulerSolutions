import {NonAbunduntSumsFunc} from "./NonAbunduntSums";
import assert from "assert";


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
