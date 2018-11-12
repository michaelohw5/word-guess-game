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