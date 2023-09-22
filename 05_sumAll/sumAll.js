const sumAll = function(...numbers) {
    numbers.sort();
    let isNumber = false;

    for (let i = 0; i <= numbers.length -1; i++) {
        if (!Number.isInteger(numbers[i])) isNumber = true;
    }

    if (numbers[0] >= 0 && !isNumber) {
        let sum = numbers[0];

        for (let i = numbers[0] + 1; i <= numbers[numbers.length - 1]; i++) {
            sum += i;
        }
        return sum;
    }
    else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
