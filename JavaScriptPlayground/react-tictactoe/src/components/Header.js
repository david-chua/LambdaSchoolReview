import React from 'react';

function Header(props){

  const gameStatusMessage = (gameStatus) => {
    if (gameStatus === "playing"){
      return "Active"
    } else if (gameStatus === 'win'){
      return `Player ${props.currentPlayer} has won`;
    } else if (gameStatus === 'draw'){
      return 'Game ended in a draw';
    } else {
      return "Start game by choosing a tile"
    }
  }

  return(
    <header>
      <h1>Tic Tac Toe</h1>
      <h2>Game Status: <span id="gameStatus">{gameStatusMessage(props.gameStatus)}</span></h2>
      <h3>Current Player: <span id="currentPlayerSpan">{props.currentPlayer}</span></h3>
    </header>
  )
}

export default Header;
