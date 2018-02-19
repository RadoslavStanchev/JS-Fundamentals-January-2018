function mapAndReverse(arr) {
    console.log(
        arr.filter((num, i) => i % 2 == 1)
            .map(e => e * 2).reverse()
    )
}