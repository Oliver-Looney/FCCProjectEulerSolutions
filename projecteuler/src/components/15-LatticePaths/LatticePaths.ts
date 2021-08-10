export function LatticePathsFunc(gridSize: number) {
    //https://en.wikipedia.org/wiki/Lattice_path#Combinations_and_NE_lattice_paths
    return getBinomialCoefficient(2 * gridSize, gridSize);
}

export function getBinomialCoefficient(n: number, k: number) {
    if (k < 0 || k > n) {
        return 0;
    }
    if (k === 0 || k === n) {
        return 1;
    }
    if (k === 1 || k === n - 1) {
        return n;
    }
    let result = n;
    for (let i = 2; i <= k; i++) {
        result *= (n - i + 1) / i;
    }
    return result;
}
