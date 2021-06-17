import Header from './components/Header';
import GameBoard from './components/GameBoard';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameActive, setGameActive] = useState(true);
  const [gameState, setGameState] = useState(["","","","","","","","",""])
  const [gameStatus, setGameStatus] = useState("playing");

  const restartGame = () => {
    setGameActive(true)
    setCurrentPlayer('X')
    setGameStatus('playing');
    setGameState(["","","","","","","","",""])
  }

  return (
    <div className="App">
        <Header
          currentPlayer = {currentPlayer}
          gameStatus={gameStatus}
          />
        <GameBoard
          currentPlayer = {currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          gameActive = {gameActive}
          setGameActive={setGameActive}
          setGameState = {setGameState}
          setGameStatus={setGameStatus}
          gameState = {gameState}
        />
        <button onClick={() => restartGame()}>Restart</button>
    </div>
  );
}

export default App;
