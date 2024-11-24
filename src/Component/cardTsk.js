import React from "react";

const TaskCard = (props) => {
     
  return (
    <div className="card task-card w-75 m-5" >
      <div className="card-body" style={{display:"flex" ,justifyContent:"space-between"}}>
        <h5 className="card-title">task number: {props.id}</h5>
        <p className="card-text">{props.todo}</p>
       
        <p
          className={`badge ${
            props.completed 
              ? "bg-success"
              : "bg-warning"
             
          }`}
        >
          {props.completed? "Completed":"Incompleted"}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;