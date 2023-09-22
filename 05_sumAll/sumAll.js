const sumAll = function(...numbers) {
    numbers.sort();
    let checkNaN = false;
    // const newArray = [];
    for (let i = 0; i <= numbers.length -1; i++) {
        if (!Number.isInteger(numbers[i])){
            checkNaN = true;
            return "ERROR";
        }
    }

    if (numbers[0] >= 0 && !checkNaN) {
        let j = numbers[0];

        for (let i = numbers[0] + 1; i <= numbers[numbers.length - 1]; i++) {
            j += i;
        }
        return j;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
