import React, { useState, useEffect } from "react";
import "./styles.scss";

import pokemonServices from './services/pokemonServices';
import { usePokeState } from './hooks/usePokeState';

import PokeList from './components/PokeList';
import SelectedPoke from './components/SelectedPoke';

function App() {
  const [
    pokemen,
    selectedPokemon,
    handlePoke
  ] = usePokeState();

  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon} />
      <PokeList handlePoke={handlePoke} pokemen={pokemen} />
    </div>
  );
}

export default App;
