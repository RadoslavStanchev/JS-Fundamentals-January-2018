function solution(arr){
    let totalMoney = 0
    let goldPrice = 67.51
    let bitcoinPrice = 11949.16
    let bitcoinCount = 0
    let daycounter = 0
    let firstday = 0
    let moneyPerDay = 0
    for (let i = 1; i <= arr.length; i++) {
        let currentGold = Number(arr[i -1])
        if(i % 3 === 0) {
            moneyPerDay = (currentGold * 0.7) * goldPrice
        } else{
                moneyPerDay = currentGold * goldPrice
            }
            totalMoney += moneyPerDay
            daycounter++
                 while(totalMoney > bitcoinPrice){
                     totalMoney -= bitcoinPrice
                     bitcoinCount++
                     if(bitcoinCount === 1){
                         firstday = daycounter
                     }
                 }
    }
    console.log('Bought bitcoins: ' + bitcoinCount)
    if(firstday >= 1){
        console.log('Day of the first purchased bitcoin: ' + firstday)
    }
    let outputMoney = totalMoney.toFixed(2)
    console.log(`Left money: ${outputMoney} lv.`)
}