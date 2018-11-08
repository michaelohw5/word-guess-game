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
var numWins = 0;
var totalGuess = 8;
var lettersGuessed = []; // letters guessed stored as arr
var currentWord = [];


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
    var picked = arr[i];
    for (var j=0; j<picked.length; j++) {
        currentWord.push(picked[j]);
    }
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


//play the game
var play = function() {

}


// picked answer
pickWord(wordList);
console.log(currentWord);
console.log(numWins);
console.log(totalGuess);


//TESTING GROUND



