function stringLength (string) {
    let length =  string.length;
    if(length < 1) {
        return "Empty string not acceptable";
    }
    else if (length > 10) {
        return "String length longer than 10 character is not acceptable";
    }
    else {
        return length;
    }
}
module.exports = stringLength;