import React,{useState} from "react";
import "../App.css";

function TodoInput(props) {
    const [inputText,setInputText] = useState('');
    const style={
        display:'flex',
        backgroundColor:'white',
        padding:'10px',
        borderRadius:'5px',
    }
    const input={
        flex:'1',
        border:'none',
    }
  return (
    <div  style={style}>
      <input
        type="text"
        style={input}
        placeholder="Add a new task..."
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
      />
      <button className="add-btn" 
      onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>Add</button>      
    </div>
  );
}

export default TodoInput;
