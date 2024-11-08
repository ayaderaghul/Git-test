

function playRound(humanChoice, computerChoice) {
if (humanChoice === "R" && computerChoice === "P") {
alert("Computer won!");
}
if (humanChoice === "R" && computerChoice === "S") {
alert("You won!");
}
if (humanChoice === "P" && computerChoice === "S") {
alert("Computer won!");
}
if (humanChoice === "P" && computerChoice === "R") {
alert("You won!");
}
if (humanChoice === "S" && computerChoice === "R") {
alert("Computer won!");
}
if (humanChoice === "S" && computerChoice === "P") {
alert("You won!");
}
if (humanChoice === computerChoice){
alert("Draw");
}
};

const humanSelection = prompt("enter R, P or S:");

function getComputerChoice(){
const r = Math.random();
if (r < 0.3) {
return "R";
} else if (r < 0.6) {
return "P";
} else {
return "S";
}
};

const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
