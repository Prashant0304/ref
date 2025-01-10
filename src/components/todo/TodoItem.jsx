import React from "react";
import ok from "../../assests/ok.png";
import deleteLogo from "../../assests/delete.png";
const TodoItem=({completed,text,id})=>{
    const styled={
        textDecoration :completed ? "line-through" : "none",
    };

    const handleToggle=()=>{

    };
    const handleDelete=()=>{

    };
    return (
        <div style={styled} className="todoInput">
        <p>{text}</p>
        <div>
            <span>
                <img src={ok} alt="ok" className="ok" onClick={handleToggle}/>
            </span>
            <span>
                <img src={deleteLogo} alt="delete" className="delete" onClick={handleDelete}/>
            </span>
        </div>
    </div>
    );
};
export default TodoItem;