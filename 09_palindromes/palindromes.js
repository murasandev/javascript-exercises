const palindromes = function (testString) {
// take out spaces and punctuation
// convert to all lower-case
// store values into array[1] and store values from reverse string in array[2]
// compare array values, if all equal return palindrome

// try removing punctuation by converting to lowercase than if value of char 
// not within lowercase values, omit

let lowerCaseString = testString.toLowerCase();
let origString = [];
for (i = 0; i < lowerCaseString.length(); i++) {
    if (lowerCaseString.charCodeAt(i) > 97 && lowerCaseString.charCodeAt(i) < 122) {
        origString.push(lowerCaseString[i]);
    }
}
};

// Do not edit below this line
module.exports = palindromes;
