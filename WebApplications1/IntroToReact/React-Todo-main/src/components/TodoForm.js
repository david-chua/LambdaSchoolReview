import React, { useState } from 'react';


export default function TodoForm(props){
  const { todoAdd, setTodoAdd, addTodo, removeCompleted } = props;

  const changeHandler = event => {
    setTodoAdd(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div>
      <input  onChange={changeHandler}  value={todoAdd} placeholder="Add a todo"/>
      <button onClick={()=> addTodo()}>Add Todo</button>
      <button onClick={()=> removeCompleted()}>Clear Completed</button>
    </div>
  )
}
