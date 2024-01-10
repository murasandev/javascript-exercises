const fibonacci = function(n) {
    // get total ex n = 3, 1,1,2,3 i[1] = 1, i[2] = 1,
    let currNumber = 1,
        nextNumber = 0;

    let numberArray = [0, 1];

    if (n === 0) return 0;
    if (n === 1) return 1;

    for (i = 2; i <= n; i++) {
            let newNumber = currNumber + nextNumber;
            numberArray.push(newNumber);
            nextNumber = currNumber;
            currNumber = newNumber;
        }
    return numberArray[n]; 
};

// Do not edit below this line
module.exports = fibonacci;
