const findTheOldest = function(array) {
    return array.reduce(person => {
        person.yearOfDeath - person.yearOfBirth;
    })
};

const getAge = function(birth, death){
    if(!death) death = Date().getFullYear();

    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
