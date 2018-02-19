function isPalindrome(a) {
    let reversed = a.split('').reverse().join('')
    if (reversed === a) {
        return true
    }
    return false
    // ili return a.split('').reverse().join("") === a; na edin red
}
console.log(isPalindrome("racecar"));