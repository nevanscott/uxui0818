var humanScore = 0;
var computerScore = 0;

document.getElementById('parchment').onclick = playParchment;
document.getElementById('stone').onclick = playStone;
document.getElementById('blade').onclick = playBlade;

function playParchment() {
	play("parchment");
}
function playStone() {
	play("stone");
}
function playBlade() {
	play("blade");
}

function play(humanPlay) {
	
	computerPlay = getComputerPlay();
	
	document.getElementById('status').innerHTML = "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>.</p>";
	
	if (humanPlay == 'parchment') {
		if (computerPlay == 'parchment') {
			document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
		} else if(computerPlay == 'stone') {
			document.getElementById('status').innerHTML += "<p>You win! :)</p>";
			humanScore++;
		} else if (computerPlay == 'blade') {
			document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
			computerScore++;
		}	
	} else if(humanPlay == 'stone') {
		if (computerPlay == 'parchment') {
			document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
			computerScore++;
		} else if(computerPlay == 'stone') {
			document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
		} else if (computerPlay == 'blade') {
			document.getElementById('status').innerHTML += "<p>You win! :)</p>";
			humanScore++;
		}
	} else if (humanPlay == 'blade') {
		if (computerPlay == 'parchment') {
			document.getElementById('status').innerHTML += "<p>You win! :)</p>";
			humanScore++;
		} else if(computerPlay == 'stone') {
			document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
			computerScore++;
		} else if (computerPlay == 'blade') {
			document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
		}	
	}
	
	document.getElementById('humanScore').innerHTML = humanScore;
	document.getElementById('computerScore').innerHTML = computerScore;
	
}

function getComputerPlay() {
	var plays = ['parchment', 'stone', 'blade'];
	var play = plays[Math.floor(Math.random() * plays.length)];
	return play;
}