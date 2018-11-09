// =====VARIABLES=====
const maxGuesses = 10; // max guesses allowed. stays constant
var wordList;
var numWins;
var remainingGuess;
var lettersGuessed;// letters guessed stored as arr
var currentWord;
var displayWord;
var currentLetter;
var correctDiv = document.getElementById("correct");
var remainingDiv = document.getElementById("remaining");
var guessedDiv = document.getElementById("guessedLetters");
var currentDiv = document.getElementById("current");


//=====FUNCTIONS=====

//Initialize the game
var initializeGame = function () {
    wordList = [
        "pink floyd",
        "led zeppelin",
        "the doors",
        "rolling stones",
        "anotherone",
        "test1",
        "test2",
        "test3",
    ];
    numWins = 0;
    remainingGuess = 10;
    lettersGuessed = [];
    currentWord = [];
    displayWord = "";
}

//rand number generator
var randNumGen = function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}; //works cuz copy pasta

//function to pick a random answer from an array
var pickWord = function (arr) {
    var i = randNumGen(0, arr.length - 1);
    var picked = arr[i];
    for (var j = 0; j < picked.length; j++) {
        currentWord.push(picked[j]);
    }
}; //works

//function to check if a letter is in the word
var checkLetter = function () {
    for (var i = 0; i < currentWord.length; i++) {
        if (currentLetter === currentWord[i]) {
            return true;
        }
    }
    remainingGuess--; // decrease the amount of total guess left.
    return false;
}; //works

//once we check if a letter is in the word, we need to figure out 
//the indexes... indices? anyway, so we can use it.
//because of that I think it needs to return an array.
var indexToChange = function (word, letter) {
    var arrOfIndexes = [];
    for (var i = 0; i < word.length; i++) {
        if (letter === word[i]) {
            arrOfIndexes.push(i);
        }
    }
    return arrOfIndexes;
}; //works

//replace the word with underline
var underline = function () {
    arrToReturn = [];
    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === " ") {
            arrToReturn.push('&nbsp;');
        }
        else {
            arrToReturn.push("_")
        }
    }
    return arrToReturn.join(" ");
};

//underline array to string for display
var underlineDisplay = function () {
    var arr = underline();
    for (var i = 0; i < arr.length; i++) {
        displayWord += arr[i] + " ";
    }
    return displayWord;
}

//String-ify the current word array for ... if i need it
var currentToString = function () {
    var stringToReturn = "";
    for (var i = 0; i < currentWord.length; i++) {
        stringToReturn += currentWord[i];
    }
    return stringToReturn;
};

var insertToCurrent = function () {
    var newP = document.createElement("p");
    newP.innerHTML = underline();
    currentDiv.appendChild(newP);
}

var insertToGuessedLetters = function () {
    var newP = document.createElement("p");
    newP.innerHTML = lettersGuessed;
    guessedDiv.appendChild(newP);
}

//reset page
var resetPage = function () {
    document.getElementById("correct").textContent = "0";
    document.getElementById("remaining").textContent = remainingGuess;
    document.getElementById("guessedLetters").textContent = lettersGuessed;
    insertToCurrent();
};

//reset game
var resetGame = function () {
    pickWord(wordList);
    numWins = 0;
    remainingGuess = 10;
};

//function to check if input is a letter
var isLetter = function (ch) {
    return /^[A-Z]$/i.test(ch);
};

//gotta change displayWord whenever there is correct guess


//check whether the user input is within the currentWord. returns boolean.
var checkGuess = function () {
    document.onkeyup = function (e) {
        var userInput = e.key; //get user input
        currentLetter = e.key;
        if (isLetter(userInput)) {
            for (var i = 0; i < currentWord; i++) {
                if (currentWord[i] === userInput) {
                    return true;
                }
            }
            lettersGuessed.push(userInput);
            console.log(lettersGuessed);
        }
        else {
           return false;
        }
    }
};

//if user input is correct then replace underlines with that input
var displayCorrectLetter = function () {
    var correctIndexes = indexToChange();
    for (var i = 0; i<correctIndexes.length; i++) {
        
    }
}


// window.onkeydown = function (e) {
//     var code = e.keyCode ? e.keyCode : e.which;
//     if (code === 38) { //up key
//         alert('up');
//     } else if (code === 40) { //down key
//         alert('down');
//     }
// };

var play = function () {
    //TESTING GROUND
    initializeGame();
    resetGame();
    resetPage();
    checkGuess();
    console.log(currentWord.join(""));
    console.log(numWins);
    console.log(remainingGuess);
    console.log(underline(currentWord));
    console.log(currentToString(currentWord));
    console.log(lettersGuessed);
};

//=====PLAY=====
play();






