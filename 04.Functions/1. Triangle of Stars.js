function starsTriangle(size){
    for (let i = 1; i <= size; i++) {
        print(i)
    }
    for (let i = size - 1; i > 0; i--) {
        print(i)
    }
    function print(num) {
        console.log("*".repeat(num))
    }
}