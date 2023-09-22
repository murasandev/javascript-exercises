const sumAll = function(...numbers) {
    numbers.sort();
    let isNumber = false;
    // const newArray = [];
    for (let i = 0; i <= numbers.length -1; i++) {
        if (!Number.isInteger(numbers[i])){
            isNumber = true;
            return "ERROR";
        }
    }

    if (numbers[0] >= 0 && !isNumber) {
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
