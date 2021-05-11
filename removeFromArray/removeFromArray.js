const removeFromArray = function(wanted, notWanted) {
    let numbers = Array.from(wanted);
    
    for(i = 10; i > 0; i--){
        if(numbers[i] === notWanted){
            let result = numbers.splice(i, 1);
            return result;
        }
    } 
}   
  

module.exports = removeFromArray
