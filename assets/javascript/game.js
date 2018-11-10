// =====VARIABLES=====
const maxGuesses = 10; // max guesses allowed. stays constant
var wordList; // list of words, uninitialized
var numWins; // number of correct guesses
var remainingGuess; // number of remaining guesses
var lettersGuessed;// letters guessed stored as arr
var currentWord; // current word selected (randomly)
var displayWord; // current word in display form (so currentWord is not altered)
var currentLetter; // current letter inputted by the user
var indexOfLetter = [];
var correctDiv = document.getElementById("correct"); //
var remainingDiv = document.getElementById("remaining");
var guessedDiv = document.getElementById("guessedLetters");
var currentDiv = document.getElementById("current");


//=====FUNCTIONS=====

//rand number generator
var randNumGen = function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}; //works cuz copy pasta

//Initialize the game
var initializeGame = function () {
    wordList = [
        "test subject"
    ];
    numWins = 0;
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
// var indexToChange = function (word, letter) {
//     var arrOfIndexes = [];
//     for (var i = 0; i < word.length; i++) {
//         if (letter === word[i]) {
//             arrOfIndexes.push(i);
//         }
//     }
//     console.log(arrOfIndexes);
//     return arrOfIndexes;
// }; //works

//replace the word with underline
var underline = function () {
    // arrToReturn = [];
    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === " ") {
            underlineWord.push('&nbsp;');
        }
        else {
            underlineWord.push("_")
        }
    }
    return underlineWord.join(" ");
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
    var targetDiv = document.getElementById("currentWord");
    var underDiv = document.getElementById("currentUnderline");
    underDiv.innerHTML = underline();
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

var resetUnderlineDisplay = function () {
    var underDiv = document.getElementById("currentUnderline");
    underDiv.innerHTML = underlineWord.join(" ");
}

var resetOtherDisplay = function () {
    correctDiv.textContent = numWins;
    remainingDiv.textContent = remainingGuess;
}

var gameWin = function () {
    alert("YOU WIN");

}

var gameOver = function () {
    alert("YOU LOSE");
}

//check whether the user input is within the currentWord.
var checkGuess = function () {
    document.onkeyup = function (e) {
        currentLetter = e.key;
        resetUnderlineDisplay();
        resetOtherDisplay();
        if (isLetter(currentLetter)) {
            if (remainingGuess === -1) {
                resetOtherDisplay();
                gameOver();
            }
            else if (!currentWord.includes(currentLetter)) {
                remainingGuess--;
            }
            
            if (numWins === currentWord.length) {
                gameWin();
            }
            else {
                if (!lettersGuessed.includes(currentLetter)) {
                    for (var i = 0; i < currentWord.length; i++) {
                        if (currentWord[i] === currentLetter) {
                            indexOfLetter.push(i);
                            underlineWord[i] = currentLetter;
                        }
                    }
                    numWins++;
                }
                lettersGuessed.push(currentLetter);
                console.log("number wins " + numWins);
                console.log(underlineWord);
                resetUnderlineDisplay();
                resetOtherDisplay();
            }
        }
        else {
            console.log("not working");
        }
        console.log(lettersGuessed);
        console.log(indexOfLetter);
    }
}; //yesssss


var play = function () {
    //TESTING GROUND
    initializeGame();
    resetGame();
    resetPage();
    checkGuess();
};

//=====PLAY=====
play();






