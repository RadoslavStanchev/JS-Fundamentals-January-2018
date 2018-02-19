function addRemove(arr){
    let result = []
    let counter = 1

    let commands = {
        add:(num) => result.push(num),
        remove: (num) => result.pop()
    }
    for (let i = 0; i < arr.length; i++) {
        let cmd = arr[i]
        commands[cmd](counter)
        counter++
    }
    if(result.length == 0){
        console.log('Empty')
    }
    result.forEach(num => console.log(num))
}