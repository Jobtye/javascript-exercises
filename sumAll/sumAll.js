const sumAll = function(first, seccond) {
    let finalArray = [];
    let i = 0;
    let finalNumber = 0;


    for(let i = first; i <= seccond; i++ ){ //gets all numbers inbetween and makes an array
        finalArray.push(i);
        
    }

    while ( i < finalArray.length ){ //does all the adding. but loopoing through the string
    finalNumber += finalArray[i] //kinda concats into the finalnumber variable.
    i++;
    }
    return finalNumber;

}

module.exports = sumAll
