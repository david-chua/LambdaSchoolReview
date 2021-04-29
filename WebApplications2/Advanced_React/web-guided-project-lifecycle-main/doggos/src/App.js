import React from 'react';
import axios from 'axios';
import SearchTerm from './SearchTerm';

// set up a class component that has state for doggos
// fetch data from "https://dog.ceo/api/breed/husky/images"
// set that data to state when it returns
// render data in the render function

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      doggos: [],
      searchTerm: 'husky'
    }
  }

  componentDidMount(){

    axios.get('https://dog.ceo/api/breed/husky/images')
    .then(res => {
      this.setState({doggos: res.data.message})
    })
    .catch(err => {
      console.log(err)
    })

  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.searchTerm !== prevState.searchTerm){
      axios.get(`https://dog.ceo/api/breed/${this.state.searchTerm}/images`)
      .then(res => {
        this.setState({doggos: res.data.message})
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  newSearch = (searchItem) => {
    this.setState({searchTerm: searchItem})
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Doggos</h1>
        <SearchTerm newSearch={this.newSearch}/>
        <div className="doggos">
        {this.state.doggos.map(doggo => (
          <img width="200" src={doggo} key={doggo} alt={doggo} />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
