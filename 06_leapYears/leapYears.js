const leapYears = function(year) {
    let isLeapYear;

    if (year % 100 === 0) {
        isLeapYear = year => (year % 400 === 0) ? true : false;
    }
    else {isLeapYear = (year) => (year % 4 === 0) ? true : false;}
    
    return isLeapYear(year);
};

// Do not edit below this line
module.exports = leapYears;
