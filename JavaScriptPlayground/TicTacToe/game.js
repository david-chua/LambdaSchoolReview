

const statusDisplay = document.querySelector('#gameStatus');
const currentPlayerStatus = document.querySelector('#currentPlayerSpan');

let gameActive = true;
let currentPlayer = "X";
let gameState = ["","","","","","","","",""]

const winningConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];


const winningMessage = () => `Player ${currentPlayer} has won`;
const drawMessage = () => 'Game ended in a draw';
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

const gameStatusMessage = (status) => {
  if (gameActive){
    return 'Active'
  } else {
    return 'Start game by choosing a tile'
  }
}

currentPlayerStatus.innerHTML = currentPlayerTurn();
statusDisplay.innerHTML = gameStatusMessage(gameActive);


function handleCellClick(clickedTarget){
  const clickedCell = clickedTarget.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

  if (gameState[clickedCellIndex] !== "" || !gameActive){
    return;
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
}

function handleCellPlayed(clickedCell, clickedCellIndex){
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

function handleResultValidation(){
  let roundWon = false;
  for (let i = 0; i<= 7; i++){
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];

    if (a === ''|| b === '' || c === ''){
      continue;
    }
    if (a === b && b === c){
      roundWon = true;
      break
    }
  }

  if (roundWon){
    statusDisplay.innerHTML = winningMessage();
    gameActive = false;
    return;
  }

  let roundDraw = !gameState.includes("");
  if (roundDraw){
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }

  handlePlayerChange();

}

function handlePlayerChange(){
  currentPlayer = currentPlayer == 'X'? 'O' : 'X';
  currentPlayerStatus.innerHTML = currentPlayerTurn()
}

function handleRestart(){
  gameActive = true;
  currentPlayer = 'X';
  gameState = ["","","","","","","","",""]
  currentPlayerStatus.innerHTML = currentPlayerTurn();
  statusDisplay.innerHTML = gameStatusMessage(gameActive);
  document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.gameRestart').addEventListener('click', handleRestart);
