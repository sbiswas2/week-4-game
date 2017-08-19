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
var randomMax = 120
var randomNumber = Math.floor(Math.random() * ((randomMax - randomMin)+1) + randomMin);
console.log(randomNumber);

var score = 0;
document.getElementById("score").innerHTML = score;

// create reset function here to call later
function newGame () {
	
}
// Player guesses buttons - document.onclick
	// As player clicks, the amount is added to players score
	// hide the number, only display the total score after it increases with each click

$("#btn-1").click(function() {
	score = score + button1Value;
	console.log(score);
	document.getElementById("score").innerHTML = score;
});

$("#btn-2").click(function() {
	score = score + button2Value;
	console.log(score);
	document.getElementById("score").innerHTML = score;
});

$("#btn-3").click(function() {
	score = score + button3Value;
	console.log(score);
	document.getElementById("score").innerHTML = score;
});

$("#btn-4").click(function() {
	score = score + button4Value;
	console.log(score);
	document.getElementById("score").innerHTML = score;
});


// If player matches number then win, if scores goes above then lose
	// document write on a win or loss
	// then reset values for buttons and random number


