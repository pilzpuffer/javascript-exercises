const findTheOldest = function(array) {
    return array.reduce((acc, currentPerson, currentIndex) => {
        let deathDate = currentPerson.yearOfDeath;
        let birthDate = currentPerson.yearOfBirth;
        
            if (!currentPerson.yearOfDeath) {
                today = new Date()
                deathDate = today.getFullYear();
            } 

            currentPerson.fullAge = deathDate - birthDate;

            console.log(`${currentPerson.name}'s death date is ${deathDate} and birth date is ${birthDate}. So their full age is ${currentPerson.fullAge}`);
            console.log(`${currentPerson.name}'s full age is ${currentPerson.fullAge} and ${acc.name}'s (stored within acc) is ${acc.fullAge}`);

        if (currentIndex === 0) {
            acc = { ...currentPerson };
        } else if (currentPerson.fullAge > acc.fullAge) {
            acc = { ...currentPerson };
        }

        return acc;
    }, [])
};

// Do not edit below this line
module.exports = findTheOldest;
