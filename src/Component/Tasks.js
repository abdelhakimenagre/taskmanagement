import React, { useEffect, useState } from 'react'
import TaskCard from './cardTsk';


function Tasks() {
    const [tasks,setTasks]=useState({});
   
    useEffect(()=>{
        const fetchtasks=async ()=>{
           const res= await fetch('https://dummyjson.com/todos',{method:"GET"}).then(res=>res.json()).then(data=>setTasks(data))
       }
        fetchtasks();
        
    },[tasks])
    const completed=tasks?.todos?.filter((task)=>task.completed)
  return (
    
  <div style={{display:"flex",flexDirection:"column"}}>
    <div style={{display:'flex',justifyContent:'space-around'}}>
    <div className="card text-bg-primary mb-3" style={{ width: "18rem" }}>
    <div className="card-header">Totale tasks</div>
    <div className="card-body">
      <h5 className="card-title"> {tasks.limit}</h5>
      
    </div>
    </div>
    <div className="card text-bg-success mb-3" style={{width: "18rem"}}>
    <div className="card-header">Tasks Completed</div>
    <div className="card-body">
    <h5 className="card-title">{completed?.length}</h5>
    
    
    </div>
    </div>
    <div className="card text-bg-danger mb-3" style={{width: "18rem"}}>
    <div className="card-header">Tasks Incompleted</div>
    <div className="card-body">
    <h5 className="card-title">{tasks.limit-completed?.length}</h5>
    
    
    </div>
    </div>
    </div>
    <div style={{alignSelf:"center",width:"80%"}}>
        
   {tasks?.todos?.map(task=>(<TaskCard  {...task}/>))}
   </div>
    </div>
  )
}

export default Tasks