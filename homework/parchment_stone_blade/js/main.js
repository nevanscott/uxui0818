// Set the User Score to zero
var userScore = 0;

// Set the Computer Score to zero
var computerScore = 0;

// When the User clicks on "Parchment":
document.getElementById('parchment').onclick = function() {
	play("Parchment");
};
// When the User clicks on "Stone":
document.getElementById('stone').onclick = function() {
	play("Stone");
};
// When the User clicks on "Blade":
document.getElementById('blade').onclick = function() {
	play("Blade");
};

// Don't worry about the details. This function gives back a random play: Parchment, Stone, or Blade.
function getComputerPlay() {
	var plays = ['Parchment', 'Stone', 'Blade'];
	var play = plays[Math.floor(Math.random() * plays.length)];
	return play;
}

// This function is called whenever the user makes a play
// When called, the userPlay should be passed, e.g. play("Parchment")
function play(userPlay) {

	// Pick a random choice for the Computer (P,S,B)
	var computerPlay = getComputerPlay();

	// Show the User what she played
	// Show the random choice (from above)
	document.getElementById('status').innerHTML = "<p>You played " + userPlay + ". Computer played " + computerPlay + ".</p>";

	// Determine if the User Wins, Loses, or Ties

	// User played Parchment
	if(userPlay == "Parchment") {
		if(computerPlay == "Parchment") {
			// User Tied
			// Show "You Tied"
			document.getElementById('status').innerHTML += "<p>You tied.</p>";
		}
		if(computerPlay == "Stone") {
			// User wins

			// Give the User a point
			userScore++;

			// Show "You win!"
			document.getElementById('status').innerHTML += "<p>You win!</p>";
		}
		if(computerPlay == "Blade") {
			// User loses
			
			// Give the Computer a point
			computerScore++;

			// Show "You lose."
			document.getElementById('status').innerHTML += "<p>You lose.</p>";
		}
	}

	// TODO: User played Stone
	
	// TODO: User played Blade

	// Show the updated scores
	document.getElementById('humanScore').innerHTML = userScore;
	document.getElementById('computerScore').innerHTML = computerScore;

}

