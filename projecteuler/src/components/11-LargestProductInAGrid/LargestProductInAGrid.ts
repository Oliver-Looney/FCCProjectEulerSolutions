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

function getInnerArray(sizeOfAdjacientNumbers: number): number[][] {
    const indexes = new Array(sizeOfAdjacientNumbers);
    const indexesOf0 = new Array(sizeOfAdjacientNumbers);
    const reversedIndexesToAdd = new Array(sizeOfAdjacientNumbers);
    for (let i = 0; i < indexes.length; i++) {
        indexes[i] = i;
        indexesOf0[i] = 0
        reversedIndexesToAdd[i] = sizeOfAdjacientNumbers - 1 - i;
    }
    return [indexes, indexesOf0, reversedIndexesToAdd];
}

export function largestProductInAGridFunc(grid: number[][], sizeOfAdjacientNumbers: number = 4) {
    const [indexesToAdd, indexesOf0, reversedIndexesToAdd] = getInnerArray(sizeOfAdjacientNumbers);

    const maxVerticalProduct = getMaxProduct(grid,
        -sizeOfAdjacientNumbers + 1,
        0,
        indexesToAdd,
        indexesOf0);
    const maxHorizontalProduct = getMaxProduct(grid,
        0,
        -sizeOfAdjacientNumbers + 1,
        indexesOf0,
        indexesToAdd);
    const maxLDiagonalProduct = getMaxProduct(grid,
        -sizeOfAdjacientNumbers + 1,
        -sizeOfAdjacientNumbers + 1,
        indexesToAdd,
        indexesToAdd);
    const maxRDiagonalProduct = getMaxProduct(grid,
        -sizeOfAdjacientNumbers + 1,
        -sizeOfAdjacientNumbers + 1,
        reversedIndexesToAdd,
        indexesToAdd);
    return Math.max(maxVerticalProduct, maxHorizontalProduct, maxLDiagonalProduct, maxRDiagonalProduct);
}


