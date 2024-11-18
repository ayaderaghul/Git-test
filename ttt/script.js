export function logExample() {
 console.log("hello");
}


export const posns =[];
for (let k=0; k<9; k++){
 posns.push([Math.floor(k/3), k%3]);
}


export function GameBoard() {

const rows = 3;
const columns = 3;
const board = [];

for (let i= 0; i< rows; i++){
 board[i]= [];

 for (let j=0; j< columns; j++){
  board[i].push(Cell());
 }
}


 const printBoard = () => {
  const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
  console.log(boardWithCellValues);
 }
 

 let mover = 1;
 const toggleMover = () => {
  if (mover === 1){
   mover = 2;
  } else {
   mover = 1;
  }
 }

 const getMover = () => mover;

 const checkWin = () => {
  if (board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1) {
   console.log("Player 1 won");
   return;
  }
 };

 const playRound = (posns) => {
  const posn = Math.floor(Math.random()*posns.length);
  const [x, y] = posns[posn];
  board[x][y].addToken(mover);
  posns.splice(posn,1);
  checkWin();
  toggleMover(mover);
 }

 return {printBoard,toggleMover,getMover,playRound}

}

export function Cell() {
 let value = 0;

 const addToken = (player) => {
  value = player;
 }

 const getValue = () => value;

 return {addToken, getValue}

}

