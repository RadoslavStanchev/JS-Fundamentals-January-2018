function extractUniqueWords(arr){
    let uniqueWords = new Set()
    for (let str of arr) {
        let words = str.split(/[^a-zA-Z0-9_]+/).filter(a => a!== '')
        for (let word of words) {
            uniqueWords.add(word.toLowerCase())
        }
    }
    console.log([...uniqueWords.values()].join(', '))

}
extractUniqueWords(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
'Pellentesque quis hendrerit dui.\n' +
'Quisque fringilla est urna, vitae efficitur urna vestibulum\n' +
'fringilla.\n' +
'Vestibulum dolor diam, dignissim quis varius non, fermentum\n' +
'non felis.\n' +
'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam\n' +
'ut.\n' +
'Morbi in ipsum varius, pharetra diam vel, mattis arcu.\n' +
'Integer ac turpis commodo, varius nulla sed, elementum\n' +
'lectus.\n' +
'Vivamus turpis dui, malesuada ac turpis dapibus, congue\n' +
'egestas metus.'])