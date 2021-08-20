import {LexicographicPermutationsFunc} from "./LexicographicPermutations";
import assert from "assert";

describe("FCC Tests", () => {
    it("699999=>1938246570", () => {
        assert.equal(LexicographicPermutationsFunc(699999), 1938246570);
    });
    it("899999=>2536987410", () => {
        assert.equal(LexicographicPermutationsFunc(899999), 2536987410);
    });
    it("900000=>2537014689", () => {
        assert.equal(LexicographicPermutationsFunc(900000), 2537014689);
    });
    it("999999=>2783915460", () => {
        assert.equal(LexicographicPermutationsFunc(999999), 2783915460);
    });
});
