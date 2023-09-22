const reverseString = (string) => {
// take string and store each character into array
// slice off last letter of array and store in new array
//return new array
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
