// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { useState } from 'react';
import Todo from './Todo';

export default function TodoList(props){

  const { todoItems, toggleTaskCompleted } = props;
  return (
    <div>
      {todoItems.map(item => {
        return <Todo key={item.id} todoItem={item} toggleTaskCompleted={toggleTaskCompleted}/>
      })}

    </div>
  )
}
