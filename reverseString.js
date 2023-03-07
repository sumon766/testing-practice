function reverseString (string) {
    let stringSplit = string.split("");
    let newString = [];
    for (let i = stringSplit.length - 1; i >= 0; i--) {
        newString.push(stringSplit[i]);
    }
    return newString.join('');
}
module.exports = reverseString;