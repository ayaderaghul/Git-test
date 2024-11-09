let humanPoint =0;
let computerPoint =0;

const points = document.querySelector("#points");
const whoWon = document.querySelector("#whoWon");

function playRound(humanChoice) {
const computerChoice = getComputerChoice();

if (humanChoice === "R" && computerChoice === "P") {
computerPoint++;
}
else if (humanChoice === "R" && computerChoice === "S") {
humanPoint++;
}
else if (humanChoice === "P" && computerChoice === "S") {
computerPoint++;
}
else if (humanChoice === "P" && computerChoice === "R") {
humanPoint++;
}
else if (humanChoice === "S" && computerChoice === "R") {
computerPoint++;
}
else if (humanChoice === "S" && computerChoice === "P") {
humanPoint++;
}
else if (humanChoice === computerChoice){
}

points.innerText = `${humanPoint}`;

if (humanPoint === 5) {
whoWon.innerText="You won!";

} else if (computerPoint ===5) {
whoWon.innerText = "Computer won!";
}

};



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


