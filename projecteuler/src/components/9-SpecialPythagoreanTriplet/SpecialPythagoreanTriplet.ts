import {getNextUniquePythagoreanTriplet} from "./getNextUniquePythagoreanTriplet";

export function SpecialPythagoreanTripletFunc(input: number) {
    let triplesGenerator = new getNextUniquePythagoreanTriplet(2, 1);
    const [a, b, c, m] = triplesGenerator.getNextTriplet();
    while ((a + b + c) != input) {
        for (let n = 1 + (m % 2); n < m; n += 2) {
            triplesGenerator.updateN(n);
            const [a, b, c] = triplesGenerator.getNextTriplet();
            if (input % (a + b + c) === 0) {
                return (a * b * c * (input / (a + b + c)));
            }
        }
    }
    return (a * b * c);
}
