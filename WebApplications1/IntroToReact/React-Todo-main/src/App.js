import React, { useState }  from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  let todoItems = [{id: 1528817077286, task: 'grocery', completed: true}, {id: 1528817084358, task: 'exercise', completed:false}];

  const [tasks, setTasks] = useState(todoItems);
  const [todoAdd, setTodoAdd] = useState('');

  function toggleTaskCompleted(id){
    console.log(id)
    setTasks(tasks.map(task => {
      return task.id == id? {...task, completed: !task.completed} : task
    }))
  }

  function addTodo(){
    let item = {
      id: Date.now(),
      task: todoAdd,
      completed: false
    }

    setTasks([...tasks, item]);
    setTodoAdd('');
  }

  function removeCompleted(){
    let filteredTasks = tasks.filter(task =>{
      return task.completed === false
    })
    setTasks(filteredTasks)
  }

  return (
    <div>
      <TodoList todoItems={tasks} toggleTaskCompleted={toggleTaskCompleted}/>
      <TodoForm todoAdd={todoAdd} setTodoAdd={setTodoAdd} addTodo={addTodo} removeCompleted={removeCompleted}/>
    </div>
  );
}

export default App;
