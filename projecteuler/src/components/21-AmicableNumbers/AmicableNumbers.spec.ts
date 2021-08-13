import {AmicableNumbersFunc} from "./AmicableNumbers";

import assert from "assert";

describe("FCC tests", () => {
    it("1000=>504", () => {
        assert.equal(AmicableNumbersFunc(1000), 504);
    });
    it("2000=>2898", () => {
        assert.equal(AmicableNumbersFunc(2000), 2898);
    });
    it("5000=>8442", () => {
        assert.equal(AmicableNumbersFunc(5000), 8442);
    });
    it("10000=>31626", () => {
        assert.equal(AmicableNumbersFunc(10000), 31626);
    });
});
