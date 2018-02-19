function escaping(arr){
    let result = '<ul>\n'
    for (let str of arr) {
        result += '   <li>' + escapeChar(str) + '</li>\n'
    }
    result += '</ul>'
    console.log(result)
    function escapeChar(str){
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}