
const repeatString = function( string, number ) {
    let result = '';

    if(number < 0) {
        return 'ERROR';
    }


      while (number > 0 ){
        result += string;
        number--;
      }return result;
    }





module.exports = repeatString
