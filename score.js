// Iteration 8: Making scoreboard functional
var urlparans = new URLSearchParams(window.location.search);
var score = urlparans.get("score");

var scoreboard = document.querySelector("#score-board");

var playAgainBtn = document.getElementById("play-again-button");

scoreboard.innerHTML = score;
playAgainBtn.onclick = () => {
    location.href = "./game.html"
};