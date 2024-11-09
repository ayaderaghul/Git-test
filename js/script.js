let humanPoint =0;
let computerPoint =0;


function playGame(){
for (let i=0;i<5;i++){

const humanSelection = prompt("enter R, P or S:");
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
alert(`${humanSelection} - ${computerSelection}. Your point: ${humanPoint}`);

}}

function playRound(humanChoice, computerChoice) {
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


playGame();
if (humanPoint > computerPoint){
alert("You won!");
} else if(humanPoint < computerPoint){
alert("Computer won!");
} else {
alert("Draw");
}
