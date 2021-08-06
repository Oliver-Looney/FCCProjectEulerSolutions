import assert from "assert";
import {SpecialPythagoreanTripletFunc} from "./SpecialPythagoreanTriplet";


describe("FCC tests:", () => {
    it("24=>480", () => {
        assert.equal(SpecialPythagoreanTripletFunc(24), 480);
    });
    it("120=>49920|55080|60000", () => {
        const result = SpecialPythagoreanTripletFunc(120);
        //( 49920,55080,60000)
        assert.equal((result in [49920, 55080, 60000]), true);
    });
    it("1000=>31875000", () => {
        assert.equal(SpecialPythagoreanTripletFunc(1000), 31875000);
    });
});
