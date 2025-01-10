import React, { useState } from "react";
import { addTodo } from "../../redux/actions/todoActions";
import { useDispatch } from "react-redux";

const TodoInput=()=>{
    const dispatch=useDispatch();
    const [text,setText]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefalut();
        dispatch(addTodo(text));
        setText("");
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className="input" value={text} onChange={(e)=>setText(e.target.value)}/>
                <button type="submit" className="addBtn">Add</button>
            </form>
        </div>
    );
};
export default TodoInput;