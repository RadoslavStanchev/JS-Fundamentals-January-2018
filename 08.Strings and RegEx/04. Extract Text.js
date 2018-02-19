function extractText(str){
    let resultArr = [];
    while(true){
        let start = str.indexOf('(');
        if(start < 0)
            break;
        let end = str.indexOf(')');
        if(end < 0 || end < start)
            break;
        resultArr.push(str.substring(start + 1, end));
        str = str.substring(end + 1)
    }
    console.log(resultArr.join(', '))
}