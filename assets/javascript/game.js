// =====VARIABLES=====
// list of answers
var wordList = [
    "pink floyd",
    "led zeppelin",
    "the doors",
    "rolling stones",
    "anotherone",
    "test1",
    "test2",
    "test3",
];
//randomly picked answer
var underlineDiv = document.getElementById("underline");
var totalGuess = 8;

//=====FUNCTIONS=====
//rand number generator
var randNumGen = function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}; //works cuz copy pasta

//function to pick a random answer from an array
var pickWord = function (arr) {
    var i = randNumGen(0, arr.length-1);
    return arr[i];
}; //works

//function to check if a letter is in the word
var checkLetter = function (word, letter) {
    for(var i=0; i<word.length; i++) {
        if(letter === word[i]) {
            return true;
        }
    }
    totalGuess--; // decrease the amount of total guess left.
    return false;
}; //works

//once we check if a letter is in the word, we need to figure out 
//the indexes... indices? anyway, so we can use it.
//because of that I think it needs to return an array.
var indexToReturn = function(word, letter) {
    var arrOfIndexes = [];
    for (var i=0; i<word.length; i++) {
        if (letter === word[i]) {
            arrOfIndexes.push(i);
        }
    }
    return arrOfIndexes;
}; //works

//show underlines in html for the picked answer
var showUnderline = function(word) {
    for (var i=0; i<word; i++) {
        underlineDiv.textContent += "_";
        console.log("5");
    }
}; //not working, at all. like console.log dont even show up. must be not running at all when i call it?




// picked answer
var theWord = pickWord(wordList);
console.log(theWord);


//TESTING GROUND
showUnderline(theWord);



