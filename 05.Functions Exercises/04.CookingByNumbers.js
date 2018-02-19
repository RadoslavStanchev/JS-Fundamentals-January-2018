function cookingByNumbers(arr){
    let number = arr[0]
    let operations = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => ++num,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.8
    }
    
    for (let idx = 1; idx < arr.length; idx++) {
        const currentOperation = arr[idx]
        number = operations[currentOperation](number)
        console.log(number)
    }
}