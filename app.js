




var chosenWord = ["relentless", "pizza", "phantasmagoria", "constituency"]
var guessesLeft = 10;
var wins = 0;

if (guessesLeft == 10) { 

wordToGuess = chosenWord[Math.floor(Math.random() * chosenWord.length)];
console.log(wordToGuess);

}
document.getElementById('guesses-left').innerHTML = guessesLeft;
document.getElementById('wins').innerHTML = wins;



var chosenWordArray = Array.from(wordToGuess);

var underscoreArray = [];
console.log(underscoreArray);

for (var i = 0; i < chosenWordArray.length; i++) {
  underscoreArray.push("_");
}

console.log(underscoreArray);


document.getElementById('underscore-array').innerHTML = underscoreArray.join(' ');




document.addEventListener("keyup", function(event) {
 console.log(event.key);

 for (var i = 0; i < chosenWordArray.length; i++) {

   if (chosenWordArray[i] == event.key) {
     underscoreArray[i] = event.key;

   }

 }

  console.log(underscoreArray);
    document.getElementById('underscore-array').innerHTML = underscoreArray.join(' ');
if (underscoreArray.join() == chosenWordArray.join()) {

  alert("You Win!");

}

})




//Need to create a series of words
//A new word needs to be chosen ramdonly at beginnig
