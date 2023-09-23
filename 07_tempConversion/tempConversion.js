const convertToCelsius = function(degrees) {
    degrees = (degrees - 32) * (5/9);
    return (Math.round(degrees * 10)/10);
};

const convertToFahrenheit = function(degrees) {
    degrees = (degrees * (9/5) +32);
    return (Math.round(degrees * 10)/10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
