const reverseString = (string) => {
    const stringArray = string.split("");
    const reverseArray = [];

    for (let i = stringArray.length - 1, j = 0; i >= 0; i--) {
        reverseArray[j] = stringArray[i];
        j++;
    }
    return reverseArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
