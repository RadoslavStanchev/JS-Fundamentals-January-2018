function modifyAverage(num) {
    let numStr = String(num)
    let getAverage = (numString) => {
        let sum = 0;
        for (let index = 0; index < numString.length; index++) {
            const element = Number(numString[index])
            sum += element

        }
        return sum / numString.length
    }

    while(getAverage(numStr) <= 5) {
        numStr += 9
    }
    console.log(numStr)
}
let number = 101
modifyAverage(number)