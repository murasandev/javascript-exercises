const sumAll = function(min, max) {
  let newArr = [];
  if(!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0){
    return "ERROR";
  }
  else{
    if(min < max){
      for (let index = min; index <= max; index++) {
        newArr.push(index);
      }
    }
    else{
      for (let index = max; index <= min; index++) {
        newArr.push(index);
      }
    }
    
    return newArr.reduce((total, current) => total + current);
  }
};

// Do not edit below this line
module.exports = sumAll;
