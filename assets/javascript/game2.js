const maxGuesses = 10; // max guesses allowed. stays constant
var wordList; // list of words, uninitialized
var correctGuess; // number of correct guesses
var remainingGuess; // number of remaining guesses
var lettersGuessed;// letters guessed stored as arr
var currentWord; // current word selected (randomly)
var displayWord; // current word in display form (so currentWord is not altered)
var currentLetter; // current letter inputted by the user
var indexOfLetter = [];
var underlineWord;
var correctDiv = document.getElementById("correct"); //
var remainingDiv = document.getElementById("remaining");
var guessedDiv = document.getElementById("guessedLetters");
var currentDiv = document.getElementById("current");
var randNumGen = function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}; //works cuz copy pasta

//Initialize the game
var initializeGame = function () {
    wordList = [
        "test subject",
        "test subject two",
    ];
    correctGuess = 0;
    remainingGuess = 10;
    lettersGuessed = [];
    currentWord = [];
    underlineWord = [];
    displayWord = "";
}

//function to pick a random answer from an array
var pickWord = function (arr) {
    var i = randNumGen(0, arr.length - 1);
    var picked = arr[i];
    for (var j = 0; j < picked.length; j++) {
        currentWord.push(picked[j]);
    }
}; //works

//goes thru currentWord, and clones it into another array, replacing letters with underline.
var underline = function () {
    // arrToReturn = [];
    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === " ") { //replaces space
            underlineWord.push('&nbsp;');
        }
        else {
            underlineWord.push("_")
        }
    }
    displayWord = underlineWord;
    return underlineWord.join(" ");
};

//reset game
var resetGame = function () {
    pickWord(wordList);
    correctGuess = 0;
    remainingGuess = 10;
};

//reset page with needed variables
var resetPage = function () {
    var underDiv = document.getElementById("currentUnderline");
    underDiv.innerHTML = displayWord;
    document.getElementById("correct").textContent = "0";
    document.getElementById("remaining").textContent = remainingGuess;
    document.getElementById("guessedLetters").textContent = lettersGuessed;
};

//function to check if input is a letter
var isLetter = function (ch) {
    return /^[A-Z]$/i.test(ch);
};

//reset underline div's display
var resetUnderlineDisplay = function () {
    var underDiv = document.getElementById("currentUnderline");
    underDiv.innerHTML = displayWord.join(" ");
}

//other divs display are reset
var resetOtherDisplay = function () {
    correctDiv.textContent = correctGuess;
    remainingDiv.textContent = remainingGuess;
}

var gameWin = function () {
    resetGame();
    resetPage();
    alert("YOU WIN");
}

var gameOver = function () {
    resetGame();
    resetPage();
    gameOver = true;
    alert("YOU LOSE");
}

var checkGuess = function () {
    document.onkeyup = function (e) {
        currentLetter = e.key;
        resetUnderlineDisplay();
        resetOtherDisplay();
        if (correctGuess === currentWord.length-1) {
            gameWin();
        }
        else if (remainingGuess <= 0) {
            gameOver();
        }
        else if (!currentWord.includes(currentLetter)) {
            remainingGuess--;
            if (!lettersGuessed.includes(currentLetter)) {
                lettersGuessed.push(currentLetter);
            }
            document.getElementById("guessedLetters").textContent = lettersGuessed;
        }
        else {
            if (!lettersGuessed.includes(currentLetter)) {
                for (var i = 0; i < currentWord.length; i++) {
                    if (currentWord[i] === currentLetter) {
                        indexOfLetter.push(i);
                        underlineWord[i] = currentLetter;
                    }
                }
                correctGuess++;
                lettersGuessed.push(currentLetter)
            }
            document.getElementById("guessedLetters").textContent = lettersGuessed;
            resetUnderlineDisplay();
            resetOtherDisplay();
        }
    }
}

var play = function () {
    //TESTING GROUND
    initializeGame();
    resetGame();
    resetPage();
    checkGuess();
};

play();