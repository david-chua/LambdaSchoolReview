import React from 'react'

export default function Search(props) {
  const { searchStr, setSearchStr } = props;
  // STRETCH - What prop do we need to be able to change the value of
  // the search term (which is state that lives in the top-level component)?
  const changeHandler = event => {
    // STRETCH - On 'change' of the input we should set a new search term in app state
    setSearchStr(event.target.value)
  }

  return (
    <div className='search-friends container'>
      <input onChange={changeHandler} value={searchStr}/>
    </div>
  )
}