const getTheTitles = function(array) {
    const titleGetter = array.reduce((acc, currentBook) => {
        acc.push(currentBook.title);
        return acc;
    }, [])

    return titleGetter;
};

// const getTheTitles = function(array) {
//     return array.map((item) => item.title)
// }

// Do not edit below this line
module.exports = getTheTitles;
