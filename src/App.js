import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList';

function App() {
  const [listTodo,setListTodo]=useState([]);
  const [count,setCount]=useState(0);

  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
      setCount(count+1);
  }

  const deleteListItem = (del)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(del,1)
    setListTodo([...newListTodo])
    setCount(count-1);
  }  

  return (
    <div className="main-container">
      <div className="center-container">
      <h1 className="app-heading">Pending task({count})</h1>
        <hr/>
      {listTodo.map((listItem,i)=>{
          return ( 
            <Todolist 
            del={i} 
            index={i} item={listItem} 
            deleteItem={deleteListItem}   
            />
          )
        })}

        <TodoInput addList={addList}/>
        
      </div>
    </div>
  )
}

export default App