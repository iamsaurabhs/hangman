// Define an array of words to choose from
const words = ["jaws",
"rocky",
"grease",
"ghostbusters",
"batman",
"titanic",
"forrestgump",
"jurassicpark",
"pulpfiction",
"thematrix",
"gladiator",
"spiderman",
"killbill",
"avatar",
"inception",
"interstellar",
"gravity",
"frozen",
"up",
"brave",
"cars",
"findingnemo",
"toy story",
"aladdin",
"lionking",
"mulan",
"jumanji",
"shrek",
"findingdory",
"insideout",
"coco",
"lalaland",
"astarisborn",
"chicago",
"moulinrouge",
"slumdogmillionaire",
"lagaan",
"guru",
"black",
"barfi",
"kabhikhushikabhiegham",
"dilchahtahai",
"kalhonaaho",
"zindaginamilegidobara",
"queen",
"chennaiexpress",
"dangal",
"padmaavat",
"gullyboy",
"sanju",
"andhadhun",
"badhaaiho",
"wakeupsid",
"talaash",
"rockstar",
"humtum",
"baghban"];
// Choose a random word from the array
let word = words[Math.floor(Math.random() * words.length)];

// Create an array of underscores to represent the hidden word
let hiddenWord = [];
for (let i = 0; i < word.length; i++) {
	hiddenWord.push("_");
}

// Display the hidden word
document.getElementById("word").innerHTML = hiddenWord.join(" ");

// Keep track of the number of incorrect guesses
let guessesLeft = 10;

// Create a function to handle button clicks
function handleGuess(letter) {
    
	// Disable the button that was clicked
	document.getElementById(letter).setAttribute("disabled", true);
    

	// Check if the letter is in the word
	if (word.indexOf(letter) !== -1) {
		// Replace the underscores with the correct letter
		for (let i = 0; i < word.length; i++) {
			if (word[i] === letter) {
				hiddenWord[i] = letter;
			}
		}

		// Display the updated hidden word
		document.getElementById("word").innerHTML = hiddenWord.join(" ");

		// Check if the player has won
		if (hiddenWord.indexOf("_") === -1) {
			alert("Congratulations! You guessed the word.");
		}
	} else {
		// Decrement the number of guesses left
		guessesLeft--;

		// Update the guesses display
		document.getElementById("guesses").innerHTML = "Guesses left: " + guessesLeft;

		// Check if the player has lost
		if (guessesLeft === 0) {
			alert("Sorry, you ran out of guesses. The word was " + word + ".");
		}
	}
    var button = document.getElementById(letter);
  button.classList.add("disabled");
  guesses.push(letter);
  updateGuesses();
  updateWord();
}

// Create a button for each letter of the alphabet
for (let i = 0; i < 26; i++) {
	let letter = String.fromCharCode(65 + i);
	let button = document.createElement("button");
	button.innerHTML = letter;
	button.setAttribute("id", letter.toLowerCase());
	button.addEventListener("click", function() {
		handleGuess(letter.toLowerCase());
	});
	document.getElementById("buttons").appendChild(button);
}
