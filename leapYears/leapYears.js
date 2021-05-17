const leapYears = function( yearInput ){

  if( yearInput % 4 == 0 && yearInput % 100 !== 0 ){  //Check if divisable by 4 and not by 100
    return true;
  }else if( yearInput % 100 == 0 && yearInput % 400 == 0 ){ //if it is divisable by 100 then make sure 400 too. 
    return true;
  }else{
    return false;
  }
}
module.exports = leapYears
