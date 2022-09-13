import React, {useState, useRef} from "react";

import { Listformat } from "../components/Listformat";
// import Draggable from "react-draggable"
import { Button } from "../components/Button";
export const StartPage = () => {

  const[todo, setTodo] = useState([]);
  const setTodos = ()=>{
    setTodo([...todo, '']);
  }
  const[prctodo, setPrctodo] = useState("")

  const ondrag = (e)=>{
    console.log("drag start");
  
    e.target.className = "hide"
  }
  
  const ondrop = (e)=>{
    console.log("dropped");
  }

  return (
    <div style={{ marginTop: "2vh", display: "flex" }}>
      <div style={{ border: "2px solid black",
          width: "30vw",
          marginLeft: "2vw",
          marginRight: "2vw",}} >
      <div style={{ paddingLeft:"7px", paddingRight:"50px",width:"28.5vw", marginRight:"2vw", marginLeft:"2vw"}}>
    <h1> TODOs'</h1>
    <Button callme = {setTodos} txt = "+"/>
    <div>
      {
        todo.map((e,index)=>{
          return (
            <div >
            <Listformat count = {index}  key = {e.count} ondrag = {ondrag} ondrop = {ondrop}/>
            <br/>
            </div>
          )
        })
      }
     </div> 
    </div>
        </div>

      <div 
        style={{
          border: "2px solid black",
          width: "40vw",
          marginLeft: "2vw",
          marginRight: "2vw",
        }}
      >
        <h1> &nbsp; In Progress</h1>
       
      </div>
      <div 
        style={{
          border: "2px solid black",
          width: "40vw",
          marginLeft: "2vw",
          marginRight: "2vw",
        }}
      >
        <h1> &nbsp; Completed</h1>
      </div >
    </div>
  );
};
