function solution(gold){
    let totalMoney = 0
    let goldPrice = 67.51
    let bitcoin = 11949.16
    let bitCounter = 0
    let firstDay = 0
    let dayCounter = 0

    for (let i = 1; i < gold.length; i++) {

        let moneyPerDay = 0
        let currentGold = Number(gold[i - 1])
        if (i % 3 === 0) {
            moneyPerDay = (currentGold * 0.7) * goldPrice
        } else {
            moneyPerDay =  currentGold * goldPrice
        }
        dayCounter++


        totalMoney = totalMoney + moneyPerDay
        while (totalMoney > bitcoin){
            totalMoney = totalMoney -  bitcoin
            bitCounter++

            if(bitCounter === 1){
                firstDay = dayCounter
            }
        }

    }



    if( bitCounter === 0){
        console.log(`Bought bitcoins: ${bitCounter}`)
        console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
    } else{
        console.log(`Bought bitcoins: ${bitCounter}`)
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
        console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
    }



}
solution([100, 200, 300])