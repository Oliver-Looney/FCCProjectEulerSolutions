import {getFactorial, getNextElementOfNthPerm, LexicographicPermutationsFunc} from "./LexicographicPermutations";
import assert from "assert";


describe("Testing get first element of nth Perm", () => {
    it("5,[0,1,2]=>2", () => {
        assert.equal(getNextElementOfNthPerm(5, [0, 1, 2]), 2)
    });
    it("699999,[0,1,2,3,4,5,6,7,8,9]=>1", () => {
        assert.equal(getNextElementOfNthPerm(699999, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 1)
    });
});

describe("Testing get factorial", () => {
    it("3=>6", () => {
        assert.equal(getFactorial(3), 6);
    });
    it("4=>24", () => {
        assert.equal(getFactorial(4), 24);
    });
});


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
