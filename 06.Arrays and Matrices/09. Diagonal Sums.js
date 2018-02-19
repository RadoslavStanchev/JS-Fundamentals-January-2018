function diagonalSums(matrix){
    let normalDiagonal = 0
    let reverseDiagonal = 0
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(row === col){
                normalDiagonal += matrix[row][col]
                reverseDiagonal += matrix[row]
                    [matrix.length - 1 - row]
            }

        }
        }
        console.log(normalDiagonal + ' ' + reverseDiagonal)
}