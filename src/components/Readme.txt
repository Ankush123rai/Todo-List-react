import React from 'react'
import { useState } from 'react'

function Todolist(props) {
const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  return (
    <>
      <div className="list-container">
        <div className="list-item">
          <div className="list-item-left">
            <input type="checkbox"
            onClick={() => {
              setIsTaskCompleted(!isTaskCompleted);
            }}
            />
            <p id="list" style={{textDecoration: isTaskCompleted ? "line-through" : "none"}}>{props.item}</p>
          </div>
          <div className="list-item-right">
            <button className="delete-btn" onClick={()=>{
              props.deleteItem(props.del)
            }
            }>Delete</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Todolist