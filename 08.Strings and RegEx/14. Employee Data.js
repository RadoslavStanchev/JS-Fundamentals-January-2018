function employeeData(str){
    let regex = /^([A-Z][a-z]*)\s-\s([1-9][0-9]*)\s-\s([a-zA-Z0-9- ]+)/gm
    let match = regex.exec(str)
    while (match){
        console.log(`Name: ${match[1]}`)
        console.log(`Position: ${match[3]}`)
        console.log(`Salary: ${match[2]} `)
        match = regex.exec(str)
    }
}