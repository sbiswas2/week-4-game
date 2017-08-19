// 4 buttons each given a random value at the beginning of the game (between 1-12)
var buttonMin = 1;
var buttonMax = 12;
var button1Value = Math.floor(Math.random() * ((buttonMax - buttonMin)+1) + buttonMin);
var button2Value = Math.floor(Math.random() * ((buttonMax - buttonMin)+1) + buttonMin);
var button3Value = Math.floor(Math.random() * ((buttonMax - buttonMin)+1) + buttonMin);
var button4Value = Math.floor(Math.random() * ((buttonMax - buttonMin)+1) + buttonMin);
	console.log(button1Value);
	console.log(button2Value);
	console.log(button3Value);
	console.log(button4Value);

// Player is shown a random number at the beginning of the game (between 19-120)
var randomMin = 19;
var randomMax = 120;
var randomNumber = Math.floor(Math.random() * ((randomMax - randomMin)+1) + randomMin);
$("#random-number").text(randomNumber);
	console.log(randomNumber);

// score set at 0, display score
var score = 0;
$("#score").text(score);

// keep track of wins and losses
var wins = 0;
var losses = 0;
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

// create reset function here to call later after a win or loss
function newGame () {
	// new button values
	button1Value = Math.floor(Math.random() * ((buttonMax - buttonMin)+1) + buttonMin);
	button2Value = Math.floor(Math.random() * ((buttonMax - buttonMin)+1) + buttonMin);
	button3Value = Math.floor(Math.random() * ((buttonMax - buttonMin)+1) + buttonMin);
	button4Value = Math.floor(Math.random() * ((buttonMax - buttonMin)+1) + buttonMin);
		console.log(button1Value);
		console.log(button2Value);
		console.log(button3Value);
		console.log(button4Value);
	// new random number value
	randomNumber = Math.floor(Math.random() * ((randomMax - randomMin)+1) + randomMin);
	$("#random-number").text(randomNumber);
		console.log(randomNumber);
	// user score back 0
	score = 0;
	$("#score").text(score);
};

// Player guesses button value when clicked
	// As player clicks, the amount is added to players score
	// hide the number, only display the total score after it increases with each click
$("#btn-1").click(function() {
	score = score + button1Value;
	$("#score").text(score);
		console.log(score);
	// If player matches number then win, if scores goes above then lose
	if (score === randomNumber) {
		wins++;
		$("#result").text("You Win!");
		$("#wins").text("Wins: " + wins);
		$("#losses").text("Losses: " + losses);
		newGame(); //reset variables
	} else if (score > randomNumber) {
		losses++;
		$("#result").text("You Lose!");
		$("#wins").text("Wins: " + wins);
		$("#losses").text("Losses: " + losses);
		newGame(); //reset variables
	}
});

$("#btn-2").click(function() {
	score = score + button2Value;
	$("#score").text(score);
		console.log(score);
	// If player matches number then win, if scores goes above then lose
	if (score === randomNumber) {
		wins++;
		$("#result").text("You Win!");
		$("#wins").text("Wins: " + wins);
		$("#losses").text("Losses: " + losses);
		newGame(); //reset variables
	} else if (score > randomNumber) {
		losses++;
		$("#result").text("You Lose!");
		$("#wins").text("Wins: " + wins);
		$("#losses").text("Losses: " + losses);
		newGame(); //reset variables
	}
});

$("#btn-3").click(function() {
	score = score + button3Value;
	$("#score").text(score);
		console.log(score);
	// If player matches number then win, if scores goes above then lose
	if (score === randomNumber) {
		wins++;
		$("#result").text("You Win!");
		$("#wins").text("Wins: " + wins);
		$("#losses").text("Losses: " + losses);
		newGame(); //reset variables
	} else if (score > randomNumber) {
		losses++;
		$("#result").text("You Lose!");
		$("#wins").text("Wins: " + wins);
		$("#losses").text("Losses: " + losses);
		newGame(); //reset variables
	}
});

$("#btn-4").click(function() {
	score = score + button4Value;
	$("#score").text(score);
		console.log(score);
	// If player matches number then win, if scores goes above then lose
	if (score === randomNumber) {
		wins++;
		$("#result").text("You Win!");
		$("#wins").text("Wins: " + wins);
		$("#losses").text("Losses: " + losses);
		newGame(); //reset variables
	} else if (score > randomNumber) {
		losses++;
		$("#result").text("You Lose!");
		$("#wins").text("Wins: " + wins);
		$("#losses").text("Losses: " + losses);
		newGame(); //reset variables
	}
});


