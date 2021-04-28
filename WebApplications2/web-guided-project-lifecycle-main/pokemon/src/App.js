import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      highlightedPokemon: {},
    };
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({pokemon: data});
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.pokemon !== prevState.pokemon) {
      // only run if this.state.pokemon has been changed
      console.log('component has re-rendered, pokemon state has been updated.');
    }

    if (this.state.highlightedPokemon !== prevState.highlightedPokemon){
      // only run this if this.state.highlightedPokemon has changed.
      console.log("component has re-rendered, highlighted pokemon has changed");
    }

  }

  render() {

    // if (this.state.pokemon.length == 0){
    //   return <h3> Loading Pokemon Deck...</h3>
    // }

    return (
      <div className="App">
        { this.state.pokemon.length == 0 ? (
          <h3> Loading Pokemon Deck...</h3>
        ) : (
          <Pokemon pokemon={this.state.pokemon} />
        )}
      </div>
    );
  }
}

export default App;
