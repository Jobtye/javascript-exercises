const sumAll = function(first, seccond) {
    let finalArray = [];
    let i = 0;
    let finalNumber = 0;

    if ( typeof(first) !== typeof(seccond)){
        return 'ERROR';

    }else if (first < seccond ){
    for(let i = first; i <= seccond; i++ ){ //gets all numbers inbetween and makes an array
        finalArray.push(i);
      }

    }else if (first > seccond){
    for(let i = seccond; i <= first; i++ ){ //gets all numbers inbetween and makes an array
        finalArray.push(i);
    }
}
    while ( i < finalArray.length ){ //does all the adding. but loopoing through the string
    finalNumber += finalArray[i] //kinda concats into the finalnumber variable.
    i++;
    }

    if (finalNumber < 0) {
        return 'ERROR';
    }else {

    return finalNumber;
    }
}   
module.exports = sumAll
