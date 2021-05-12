const removeFromArray = function(wanted, notWanted) {
    
    let wantedDone = Array.from(wanted);
    let numberToRemove = wantedDone.indexOf(notWanted);
   
   
    for (let i=2; i < arguments.length; i++) {

        let args = wantedDone.indexOf(arguments[i]);
        wantedDone.splice(args, 1);
    }
    
    wantedDone.splice(numberToRemove, 1);

    return wantedDone;
}
removeFromArray([1,2,3,4], 1, 4);
module.exports = removeFromArray
