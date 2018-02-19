function compoundInterest(data) {
    let sum = data[0]
    let interestRate = data[1] / 100;
    let frequency = 12 / data[2] //razdelqme na mesecite v 1 godina
    let years = data[3]

    let formula = sum * Math.pow(1 + interestRate / frequency, frequency * years)
    console.log(Math.round(formula * 100) / 100)
}