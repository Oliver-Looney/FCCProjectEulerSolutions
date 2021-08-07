export class getNextUniquePythagoreanTriplet {
    private a = 0;
    private b = 0;
    private c = 0;

    constructor(public m: number, public n: number) {
    }

    updateN(inputN: number) {
        this.n = inputN;
    }

    getPythagoreanA() {
        if (this.n > this.m) {
            return -1;
        }
        this.a = (this.m ** 2 - this.n ** 2);
    }

    getPythagoreanB() {
        if (this.n > this.m) {
            return -1;
        }
        this.b = (2 * this.m * this.n);

    }

    getPythagoreanC() {
        if (this.n > this.m) {
            return -1;
        }
        this.c = (this.m ** 2 + this.n ** 2);
    }

    getNextPythagoreanTriple() {
        this.getPythagoreanA();
        this.getPythagoreanB();
        this.getPythagoreanC();

    }

    IsRelativelyPrimeTo() {
        return this.GreatestCommonDivisor(this.m, this.n) === 1;
    }

    private GreatestCommonDivisor(input1: number, input2: number): number {
        return (input2 === 0 ? input1 : this.GreatestCommonDivisor(input2, input1 % input2));
    }

    public getNextTriplet() {
        const result = this.IsRelativelyPrimeTo();
        this.getNextPythagoreanTriple();
        this.m++;
        if (result) {
            return [this.a, this.b, this.c, this.m--];
        } else {
            return [-1, -1, -1];
        }
    }

}
