import React, { useState } from 'react';
import './Todo.css';

export default function Todo(props){

  const {todoItem, toggleTaskCompleted } = props;
  return (
    <div className={todoItem.completed ? 'completed' : null} >
      <p onClick={()=>toggleTaskCompleted(todoItem.id)}>{todoItem.task}</p>
    </div>
  )
}
