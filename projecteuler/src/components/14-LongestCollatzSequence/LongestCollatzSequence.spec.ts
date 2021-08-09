import assert from "assert";
import {LongestCollatzSequenceFunc} from "./LongestCollatzSequence";


describe("FCC tests", () => {
    it("14=>9", () => {
        assert.equal(LongestCollatzSequenceFunc(14), 9);
    });
    it("5847=>3711", () => {
        assert.equal(LongestCollatzSequenceFunc(5847), 3711);
    });
    it("46500=>35655", () => {
        assert.equal(LongestCollatzSequenceFunc(46500), 35655);
    });
    it("54512=>52527", () => {
        assert.equal(LongestCollatzSequenceFunc(54512), 52527);
    });
    it("100000=>77031", () => {
        assert.equal(LongestCollatzSequenceFunc(100000), 77031);
    });
    it("1000000=>837799", () => {
        assert.equal(LongestCollatzSequenceFunc(1000000), 837799);
    });
});
