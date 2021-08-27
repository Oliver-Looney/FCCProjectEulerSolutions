import assert from "assert";
import {DigitFibonaciNumberFunc} from "./1000DigitFibonaciNumber";


describe("FCC Tests", () => {
    it("5=>21", () => {
        assert.equal(DigitFibonaciNumberFunc(5), 21);
    });
    it("10=>45", () => {
        assert.equal(DigitFibonaciNumberFunc(10), 45);
    });
    it("15=>69", () => {
        assert.equal(DigitFibonaciNumberFunc(15), 69);
    });
    it("20=>93", () => {
        assert.equal(DigitFibonaciNumberFunc(20), 93);
    });
});
