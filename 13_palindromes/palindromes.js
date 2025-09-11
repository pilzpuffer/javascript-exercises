const palindromes = function (string) {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz1234567890'];
    let toCharacters = string.toLowerCase().split(""); //divide string into characters
    let isLetter = function (value) {
        if (alphabet.includes(value.toLowerCase())) {
            return value;
        }
    }

    let isPalindrome = toCharacters.filter(isLetter);
    let isPalindromeReversed = isPalindrome.toReversed();

    console.log(isPalindrome);
    console.log(isPalindromeReversed);
    
    let getAnswer = function (array1, array2) {
        return array1.every((element, index) => element === array2[index]);
    }

    return getAnswer(isPalindrome, isPalindromeReversed);
};

// Do not edit below this line
module.exports = palindromes;
