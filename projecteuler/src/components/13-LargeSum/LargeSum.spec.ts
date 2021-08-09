import {LargeSumFunc} from "./LargeSum";
import assert from "assert";


describe("FCC tests", () => {
    it("testNums=>8348422521", () => {
        assert.equal(LargeSumFunc(testNums), 8348422521);
    });
});
const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
];
