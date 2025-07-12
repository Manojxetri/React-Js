import React, { useState } from 'react';
import './App.css';
import ToDoForm from './ToDoForm'; // handles input
import ToDoList from './ToDoList'; // handles task list display

function App() {
  const [listTodo, setListTodo] = useState([]);
  // const [update,updatedTask]=useState(" ")

  const addList = (inputText) => {
    if (inputText !== '') {
      setListTodo([...listTodo, inputText]);
    }
  };

  const deleteListItem = (index) => {
    const newList = [...listTodo];
    newList.splice(index, 1);
    setListTodo(newList);
  };

 const updateList = (index) => {
  const updatedTask = prompt("Enter new task");
  if (updatedTask) {
    const newList = [...listTodo];   
    newList[index] = updatedTask;    
    setListTodo(newList);         
  }
};


  return (
    <div>
      <h1 className="app-heading">TODO</h1>
      <ToDoForm addList={addList} />
      <hr />
      <ToDoList list={listTodo} deleteItem={deleteListItem} updateItem={updateList}/>

    </div>
  );
}

export default App;
