import assert from "assert";
import {
    getNextPythagoreanTriple,
    getPythagoreanA,
    SpecialPythagoreanTripletFunc
} from "./SpecialPythagoreanTripletFunctional";


describe("Testing getNextPythagoreanTriple", () => {
    it("testing m=2,n=1", () => {
        const [a, b, c] = getNextPythagoreanTriple(2, 1);
        assert.equal(a, 3);
        assert.equal(b, 4);
        assert.equal(c, 5);
    });
    it("testing m=3,n=1", () => {
        const [a, b, c] = getNextPythagoreanTriple(3, 1);
        assert.equal(a, 8);
        assert.equal(b, 6);
        assert.equal(c, 10);
    });
});


describe("testing generating A", () => {
    it("Testing getPythagoreanA func", () => {
        assert.equal(getPythagoreanA(3, 2), 5);
        assert.equal(getPythagoreanA(2, 1), 3);
        assert.equal(getPythagoreanA(1, 2), -1);
    });
});
describe("testing generating B", () => {
    it("Testing getPythagoreanB func", () => {
        assert.equal(getPythagoreanA(3, 2), 12);
        assert.equal(getPythagoreanA(2, 1), 4);
        assert.equal(getPythagoreanA(1, 2), -1);
    });
});
describe("testing generating C", () => {
    it("Testing getPythagoreanC func", () => {
        assert.equal(getPythagoreanA(3, 2), 13);
        assert.equal(getPythagoreanA(2, 1), 5);
        assert.equal(getPythagoreanA(1, 2), -1);
    });
});


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
