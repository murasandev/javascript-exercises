const fibonacci = function(n) {
    // get total ex n = 3, 1,1,2,3 i[1] = 1, i[2] = 1,
    let total = 1,
        currNumber = 1,
        nextNumber = 0;
        
    let numberArray = [0];

    return (n === 1 ? 1 : (() => {
        for (i = 1; i <= n; i++) {
            currNumber = nextNumber + total;
            numberArray[i] = currNumber;
            nextNumber = numberArray[i-1] + currNumber;
        }
        return numberArray[n];
    })) 
};

// Do not edit below this line
module.exports = fibonacci;
