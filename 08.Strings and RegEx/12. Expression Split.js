    function expressions(str){
    let regex = /[,;().\s]+/
        str.split(regex).forEach(s => console.log(s))
    }