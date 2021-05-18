const ftoc = function(fahrenheitTemp) {
  
  let calc = (fahrenheitTemp - 32) * (5/9);

  if (calc % 1 !== 0){
    return parseFloat(calc.toFixed(1));
}else {
  return  calc;
  }
}

const ctof = function(cTemp) { 
  
  let calc2 = (cTemp * 9/5) + 32;

  if (calc2 % 1 !== 0){
    return parseFloat((calc2.toFixed(1)));
  }else {
    return calc2;
  }
}


module.exports = {
  ftoc,
  ctof
}
