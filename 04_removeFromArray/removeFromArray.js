const removeFromArray = (array, ...removeItems) => {
// take array, remove item from array
// loop through array and check items to remove
    // for each item in array 
    // loop through removeitems and compare if match
    // if no match, slice to new array
    const sortedArray = [];
    let isMatching = false;
    for (const item of array) {
        for (const itemCheck of removeItems) {
            if (item === itemCheck) {
                console.log(`remove item: ${item}`);
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
