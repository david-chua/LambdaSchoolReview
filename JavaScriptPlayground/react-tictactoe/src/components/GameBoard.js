import React from 'react';

function GameBoard(props){

  const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const handlePlayerChange = () => {
    if (props.currentPlayer === 'X') {
      props.setCurrentPlayer('O')
    } else {
      props.setCurrentPlayer('X')
    }
  }

  const handleClick = (index) =>{
    const boardCopy = [...props.gameState];

    if(boardCopy[index] !== "" || !props.gameActive){
      return;
    }

    boardCopy[index] = props.currentPlayer;
    props.setGameState(boardCopy);


    handleResultValidation();
  }

  const handleResultValidation = () =>{
    let roundWon = false;
    for (let i = 0; i<= 7; i++){
      const winCondition = winningConditions[i];
      let a = props.gameState[winCondition[0]];
      let b = props.gameState[winCondition[1]];
      let c = props.gameState[winCondition[2]];

      if (a === ''|| b === '' || c === ''){
        continue;
      }
      if (a === b && b === c){
        roundWon = true;
        console.log('break since won');
        break
      }
    }



    if (roundWon){
      props.setGameStatus('win');
      props.setGameActive(false);
      return
    }

    let roundDraw = !props.gameState.includes("");
    if (roundDraw){
      props.setGameStatus('draw');
      props.setGameActive(false);
      return
    }

    handlePlayerChange();
  }

  return(
    <section className="gameContainer">
      { props.gameState.map((square, i) => (
        <div key={i} onClick={() => handleClick(i)} className="cell">
          {square}
        </div>
      ))}
    </section>
  )
}

export default GameBoard;
