function smallestTwoNums(arr) {
    console.log(
        arr.sort((a, b) => a-b)
            .slice(0, Math.min(2, arr.length))
    )
}