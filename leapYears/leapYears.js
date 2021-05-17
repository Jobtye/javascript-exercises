const leapYears = function( yearInput ) {

  if( yearInput % 100 === 0 && yearInput % 400 === 0 && yearInput % 4 === 0 ){
    console.log ( "Leapy Year!" );
  }else{
    console.log ('Not a leapy!' );
  }
}

module.exports = leapYears
