const reverseString = function(string) {
    let lengthOfString = string.length;
    let reversedFinal = '';
    while ( lengthOfString >= 0){
      reversedFinal += string.charAt(lengthOfString);
      lengthOfString--;
    }console.log(reversedFinal);
 }
module.exports = reverseString