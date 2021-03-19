// This is the top-level component
// so we'll keep application state at this level.
// 👉 1- Import the state hook!
import React, {useState} from 'react'
import FriendsList from './FriendsList'
import Search from './Search'

// 👉 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)
import friends from '../dummy-data/friends.js';


export default function App() {
  // 👉 3- Initialize a slice of state to keep track of the data
  // using the dummy data as the initial value of the slice of state
  const [myFriends, setMyFriends] = useState(friends);

  // 👉 4- Initialize a slice to keep track of the value of the search box
  // using an empty string as the initial value of the slice
  const [searchStr, setSearchStr] = useState('');

  // 👉 5- Build a `changeStatus` function that takes an id and
  // changes the `married` from true to false and viceversa
  function changeStatus(id){
    setMyFriends(myFriends.map(friend => {

      // If/else method
      // if (friend.id === id){
      //   return { ...friend, married: !friend.married }
      // }
      //
      // return friend


      // ternary operator
      return friend.id == id ? {...friend, married: !friend.married} : friend;
    }))
  }

  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)
  const filteredFriends = myFriends.filter(obj => {
    let lowercaseStr = searchStr.toLowerCase();
    return obj.name.toLowerCase().includes(lowercaseStr);
  })

  return (
    <div className='app-friends container'>
      {/* 👉 6- Render the Search component */}
      {/* STRETCH - Changes to the input should update the search term */}
      <Search searchStr={searchStr} setSearchStr={setSearchStr}/>

      {/* 👉 7- Render the FriendsList component */}
      {/* What prop/props does FriendsList need? */}

      <FriendsList myFriends={filteredFriends} changeStatusFunc={changeStatus} setMyFriends={setMyFriends}/>

    </div>
  )
}
