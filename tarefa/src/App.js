import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Tarefa from "./Tarefa"
function App() {
  const [task,setTask]= useState('');
  const [vetTask,setVetTask]=useState([]);
  function handleAdd(){
    setVetTask([...vetTask,task]);
  }
  function handleComplete(index){
       
   }
  return (
    <div >
      <h1>Tarefas</h1>
      <ul>
        <input value={task} onChange={e=>setTask(e.target.value)}></input>
        <button onClick={handleAdd} >Adicionar Tarefa</button>
      </ul>
      <h1>Tarefas a Realizar</h1>
      {vetTask.map((e,index)=>{
        return(
           <Tarefa element={e} key={index}/>
          /* <li value={index}>{e}
              <button onClick={f=>{handleComplete(index)}}>Tarefa Realizada</button>
           </li>
           */
      );
      })
      }
      
        
      
       
      
     
    </div>
  );
}



export default App;
