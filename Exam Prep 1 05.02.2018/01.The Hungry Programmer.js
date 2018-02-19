function snatchMeals(meals, commands) {
    let mealsEaten = 0
    let actions = {
        Serve: () => {
            if(meals.length > 0){
                console.log(`${meals.pop()} served!`)
            }
        },

        Add: ([meal]) => {
            if(meal !== ''){
                meals.unshift(meal)
            }
        },
        Shift: ([startIdx, endIdx]) => {
            let hasValidIndexes = startIdx && endIdx && startIdx >=0 && endIdx < meals.length && startIdx < endIdx
            if(hasValidIndexes){
                let temp = meals[startIdx]
                meals[startIdx] = meals[endIdx]
                meals[endIdx] = temp
            }
        },
        Eat: () => {
            if(meals.length > 0){
                console.log(`${meals.shift()} eaten`)
                mealsEaten++
            }
        },
        Consume: ([startIdx, endIdx]) => {
            let hasValidIndexes = startIdx && endIdx && startIdx >= 0 && endIdx < meals.length && startIdx < endIdx
            if (hasValidIndexes) {
                let portionsCount = endIdx - startIdx + 1
                meals.splice(startIdx, portionsCount)
                mealsEaten += portionsCount
                console.log("Burp!")
            }
        },
        End: () => {
            if(meals.length > 0){
                console.log(`Meals left: ${meals.join(', ')}`)
            } else {
                console.log(`The food is gone`)
            }
            console.log(`Meals eaten: ${mealsEaten }`)
        }
    }

    for (let commandArgs of commands) {
        let commandParameters = commandArgs.split(' ')
        let action = commandParameters.shift()
        if (actions[action]) {
            actions[action](commandParameters)
            if (action === 'End') {
                break
            }
        }
    }
}
snatchMeals([
    ['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
    ['Add spaghetti',
        'Shift 0 1',
        'Consume 1 4',
        'End']

])