import assert from "assert";
import {
    calcTripleFromMN,
    IsRelativelyPrimeTo,
    SpecialPythagoreanTripletFunc,
} from "./SpecialPythagoreanTriplet";


describe("testing isRelativelyPrime", () => {
    it("testing example, 22,21=>true", () => {
        assert.equal(IsRelativelyPrimeTo(22, 21), true);
    });
    it("testing example, 24,21=>false", () => {
        assert.equal(IsRelativelyPrimeTo(24, 21), false);
    });
    it("testing example, 16,12=>false", () => {
        assert.equal(IsRelativelyPrimeTo(16, 12), false);
    });
});

describe("Testing calc triple from m & n", () => {
    it("testing 3,4,5", () => {
        const [a, b, c] = calcTripleFromMN(2, 1);
        assert.equal(a, 4);
        assert.equal(b, 3);
        assert.equal(c, 5);
    });
    it("testing 924,43,925", () => {
        const [a, b, c] = calcTripleFromMN(22, 21);
        assert.equal(a, 924);
        assert.equal(b, 43);
        assert.equal(c, 925);
    });

});

describe("FCC tests:", () => {
    it("24=>480", () => {
        assert.equal(SpecialPythagoreanTripletFunc(24), 480);
    });
    it("120=>49920|55080|60000", () => {
        const result = SpecialPythagoreanTripletFunc(120);
        //( 49920,55080,60000)
        assert.equal(result, 60000);
        //assert.equal((result in [49920, 55080, 60000]), true);
    });
    it("1000=>31875000", () => {
        assert.equal(SpecialPythagoreanTripletFunc(1000), 31875000);
    });
});
