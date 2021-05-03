import React, { useState, useReducer, createContext, useContext } from 'react';
import data from './data';
import reducer, { initialState } from './reducer';
import { setName, setLocation } from './reducer';
const PersonContext = createContext();
// Can also use multiple context
const DogContext = createContext();

const App = ()=> {
    const [person, dispatch ] = useReducer(reducer, initialState);
    console.log(dispatch)
    return(
      <div className="App component">
        <h1>Main App</h1>
        {/* value in context provider can be an object
         value={person: person, setPerson: setPerson} - but need to turn
         the useContext to have an object const { person, setPerson } = useContext(PersonContext); */}
        <PersonContext.Provider value={[person, dispatch]}>
          <DogContext.Provider value={{name: "fido", breed: "boxer"}}>
            <SubComp1 />
          </DogContext.Provider>
        </PersonContext.Provider>

        <DogContext.Provider value={{name: "fido", breed: "boxer"}}>
          <SubComp4/>
        </DogContext.Provider>
      </div>
    );
};

const SubComp1 = () =>{
  const [ person ] = useContext(PersonContext);
  return (
    <div className="component">
      <h2> Sub Component 1</h2>
      <h3> Name: {person.name.title} {person.name.first} {person.name.last}</h3>
      <SubComp2/>
    </div>
  )
}

const SubComp2 = () =>{
  const [ person ] = useContext(PersonContext);
  const dog = useContext(DogContext);
  return (
    <div className="component">
      <h2> Sub Component 2</h2>
      <h3> Dog: {dog.name}</h3>
      <h3> Location: {person.location.street} {person.location.city} {person.location.state}</h3>
      <SubComp3/>
    </div>
  )
}

const SubComp3 = (props) =>{
  const [person, dispatch] = useContext(PersonContext);
  console.log(dispatch)

  const changeLocation = () => {
    dispatch(setLocation('2222 2nd street', 'Philadelphia', 'PA'));
  }

  const changeName = () => {
    dispatch(setName('Mr.', "David", "Chua"));
  }
  return (
    <div className="component">
      <h2> Sub Component 3</h2>
      <button onClick={changeLocation}>Change Location</button>
      <button onClick={changeName}>Change Name </button>
    </div>
  )
}

const SubComp4 = () =>{
  const dog = useContext(DogContext);
  return (
    <div className="component">
      <h2> Sub Component 4</h2>
      <h3> Dog: {dog.name}</h3>
    </div>
  )
}

export default App;
