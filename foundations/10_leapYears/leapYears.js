const leapYears = function(year) {
// leap years divisible by 4
// if divisible by 100 not leap
// unless divisible by 400
  if(year % 4 === 0){
    // possible leap
    if(year % 100 != 0){
      return true;
    }
    else if (year % 100 === 0){
      if(year % 400 != 0){
        return false;
      }
      else{
        return true;
      }
    }
  }
  else{
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
