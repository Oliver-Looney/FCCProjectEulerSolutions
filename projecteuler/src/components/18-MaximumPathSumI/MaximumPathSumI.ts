export function MaximumPathSumIFunc(triangle: number[][]) {

    for (let i = triangle.length - 1; i > 0; i--) {
        for (let j = 0; j < triangle.length - 2; j++) {
            if (triangle[i][j + 1] !== 0) {
                const left = triangle[i - 1][j] + triangle[i][j];
                const right = triangle[i - 1][j] + triangle[i][j + 1];
                if (left > right) {
                    triangle[i - 1][j] = left;
                } else {
                    triangle[i - 1][j] = right;
                }
            }
        }
    }
    return triangle[0][0];
}

const testTriangle = [[3, 0, 0, 0],
    [7, 4, 0, 0],
    [2, 4, 6, 0],
    [8, 5, 9, 3]];
