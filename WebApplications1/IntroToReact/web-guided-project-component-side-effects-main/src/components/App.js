import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {BASE_URL, API_KEY } from '../constants/index.js';

// 👉 TASK 1 - import the axios lib from node_modules

// 👉 TASK 2 - import the contants from constants/index.js

import Details from './Details'

export default function App() {
  const [friends, setFriends] = useState([])
  const [currentFriendId, setCurrentFriendId] = useState(null)

  const openDetails = id => {
    setCurrentFriendId(id)
  }

  const closeDetails = () => {
    setCurrentFriendId(null)
  }

  // useEffect(() => {
  //   const fetchFriends = async () => {
  //     try{
  //       const res = axios.get(`${BASE_URL}/friends?api_key=${API_KEY}`)
  //       setFriends(res.data);
  //     } catch(err) {
  //       debugger
  //     }
  //   }
  // })
useEffect(() => {
  const fetchFriends = () => {
      axios.get(`${BASE_URL}/friends?api_key=${API_KEY}`)
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
  }
  fetchFriends()
},[])


  // 👉 TASK 3 - make an effect that runs after FIRST DOM surgery
  // caused by the first render only. You'll need `useEffect` from React.
  // The effect should consist of a call to the API using axios.
  // On success, set the array of friend objects from the API into state.

  const Friend = props => (
    <div className='friend'>
      {props.info.name}
      <button onClick={() => openDetails(props.info.id)}>
        See details
      </button>
    </div>
  )

  return (
    <div className='container'>
      <h1>Some of my friends:</h1>
      {
        // If the initial value of `friends` state weren't an empty array,
        // this would crash due to invoking `map` method on non-array.
        // We'd need a guard against this.
        friends.map(fr => {
          return <Friend key={fr.id} info={fr} />
        })
      }
      {
        currentFriendId && <Details friendId={currentFriendId} close={closeDetails} />
      }
    </div>
  )
}
