const repeatString = (string, num) => {
    let randNum = Math.floor(Math.random() * num);
    if (randNum >= 0) {
        let newString = '';
        for (let i = 0; i < num; i++) {
            newString += string;
        }
        return newString;
    }
    else return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
