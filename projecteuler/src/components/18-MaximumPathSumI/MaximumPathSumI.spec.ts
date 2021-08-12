import {MaximumPathSumIFunc} from "./MaximumPathSumI";
import assert from "assert";

describe("FCC tests", () => {
    it("test triangle=>23", () => {
        assert.equal(MaximumPathSumIFunc(testTriangle), 23);
    });
});


const testTriangle = [[3, 0, 0, 0],
    [7, 4, 0, 0],
    [2, 4, 6, 0],
    [8, 5, 9, 3]];
