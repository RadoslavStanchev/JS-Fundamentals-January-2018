function matrixMaxNumber(matrix) {
    console.log(matrix.map(arr => arr.sort((a, b) => a < b)[0])
        .sort((a, b) => a < b)[0]
    )

}
matrixMaxNumber([[100, 200], [1, 1000]])