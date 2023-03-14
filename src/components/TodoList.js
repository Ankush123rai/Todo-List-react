import React from 'react'
import { useState } from 'react';


function Todolist(props) {
const [isTaskCompleted, setIsTaskCompleted] = useState(false);

function handleTodoDelete(){
  props.deleteItem(props.index) 
}
  return (
    <>
      <li className="list-item" id='list'>
        <p
         style={{textDecoration: isTaskCompleted ? "line-through" : "none"}}
        >
        {props.item}
        </p>
        <button className="complete-btn"
        onClick={() => {
              setIsTaskCompleted(!isTaskCompleted);
            }}
        >Complete</button>
        <span className='icons'>
          <span className="delete"
            onClick={handleTodoDelete}>X</span>
        </span>
      </li>
    </>
  )
}

export default Todolist