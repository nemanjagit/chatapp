import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTaskName, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    if (newTaskName.trim() === "") {
      alert("Please enter a task name.");
      return;
    }
    const task = {
      id: todoList.length === 0 ? 0 : todoList[todoList.length - 1].id + 1,
      taskName: newTaskName,
      completed: false
    }
    setTodoList([...todoList, task]);
    setNewTask("");
    inputField.current.value = "";
  }

  const deleteTask = (idToRemove) => {
    setTodoList(todoList.filter((task) => task.id !== idToRemove));
    setNewTask("");
  }

  const turnGreen = (idToTurnGreen) => {
    const task = todoList.find((task) => task.id === idToTurnGreen);
    if (task) {
      task.completed = !task.completed;
      setTodoList([...todoList]);
    }
  }


  return (
    <div>
      <input type="text" placeholder='task to add' className='inputField' onChange={handleInputChange} value={newTaskName}></input>
      <button onClick={addTask}>Add</button>
      <list className='todoList'>
        {todoList.map((task) => {
          return <>
            <li className='todoItem'style={{color: task.completed ? 'green' : 'white' }}>{task.taskName}</li>
            <button className='completeButton' onClick={() => turnGreen(task.id)}>Complete</button>
            <button className='deleteButton' onClick={() => deleteTask(task.id)}>Delete</button>
          </>;
        })}
      </list>
    </div>
  )
}


export default App;
