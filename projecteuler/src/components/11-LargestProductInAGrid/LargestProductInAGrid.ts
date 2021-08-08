function getMaxProduct(grid: number[][], outerI: number, outerJ: number, innerI: number[], innerJ: number[]) {
    let maxProduct = 0;
    for (let i = 0; i < grid.length + outerI; i++) {
        for (let j = 0; j < grid.length + outerJ; j++) {
            const product = grid[i + innerI[0]][j + innerJ[0]] *
                grid[i + innerI[1]][j + innerJ[1]] *
                grid[i + innerI[2]][j + innerJ[2]] *
                grid[i + innerI[3]][j + innerJ[3]];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }
    return maxProduct;
}

export function largestProductInAGridFunc(grid: number[][]) {
    const maxVerticalProduct = getMaxProduct(grid,
        -3,
        0,
        [0, 1, 2, 3],
        [0, 0, 0, 0]);
    const maxHorizontalProduct = getMaxProduct(grid,
        0,
        -3,
        [0, 0, 0, 0],
        [0, 1, 2, 3]);
    const maxLDiagonalProduct = getMaxProduct(grid,
        -3,
        -3,
        [0, 1, 2, 3],
        [0, 1, 2, 3]);
    const maxRDiagonalProduct = getMaxProduct(grid,
        -3,
        -3,
        [3, 2, 1, 0],
        [0, 1, 2, 3]);
    return Math.max(maxVerticalProduct, maxHorizontalProduct, maxLDiagonalProduct, maxRDiagonalProduct);
}


