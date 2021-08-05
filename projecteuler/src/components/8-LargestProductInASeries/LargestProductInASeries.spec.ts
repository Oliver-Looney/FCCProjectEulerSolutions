import {largestProductInASeriesFunc} from "./LargestProductInASeries";
import assert from "assert";


describe("FCC tests", () => {
    it("4=>5832", () => {
        assert.equal(largestProductInASeriesFunc(4), 5832);
    });
    it("13=>23514624000", () => {
        assert.equal(largestProductInASeriesFunc(13), 23514624000);
    });
});
