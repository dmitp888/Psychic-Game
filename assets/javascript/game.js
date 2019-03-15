var computerChoices = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","t","u","x","y","z"];
var wins = 0
var losses = 0;
var guessesLeft = 10;
var guessesSoFar =[''];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text");

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;
console.log(userGuess);


console.log('guessesSoFar'+ guessesSoFar);
      // This logic determines the outcome of the game (win/loss
      
      
          console.log( "guessesLeft"  )

      if  ( guessesLeft != 0 ) { 
if (userGuess === computerGuess   ) {
      wins++; 
      } else {
    guessesLeft= guessesLeft  -1;
  losses++; 
      } 

      } else {
          alert( "You don't have anymore guesses left!  Refresh browser to start over"  )
      }
    
    
console.log( 'wins:' + wins,  'losses:'+  losses , "guessesLeft " +  guessesLeft         );


        // Display the user and computer guesses, and wins/losses/
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent= "Guesses left: " + guessesLeft;
        guessesSoFarText.textContent = "Your Guess is:"  + userGuess      ;
         

    }
    
