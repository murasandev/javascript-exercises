const removeFromArray = (array, ...removeItems) => {

    const sortedArray = [];

    let isMatching = false;

    for (const item of array) {
        for (const itemCheck of removeItems) {
            if (item === itemCheck) {
                isMatching = true;
            }
        }

        if(!isMatching) {
            sortedArray.push(item);
        }
        isMatching = false;
    }
    return sortedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
