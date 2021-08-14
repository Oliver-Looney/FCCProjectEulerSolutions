import {getTotalOfWord, NamesScoresFunc} from "./NamesScores";
import assert from "assert";


describe("Testing total letter", () => {
    it("Testing colin=>53", () => {
        assert.equal(getTotalOfWord("COLIN"), 53);
    });
});

describe("FCC tests", () => {
    it("test1=>791", () => {
        assert.equal(NamesScoresFunc(test1), 791);
    });
    it("test2=>1468", () => {
        assert.equal(NamesScoresFunc(test2), 1468);
    });
})


const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];
